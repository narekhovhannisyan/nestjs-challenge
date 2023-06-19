import { Inject, Injectable, Logger } from '@nestjs/common';

import { Offer1Service } from '../offer1-api/offer1.service';
import { Offer2Service } from '../offer2-api/offer2.service';

import { OffersModelService } from 'src/repo/main/offers/offers.service';
import { CreateOfferDto } from 'src/repo/main/offers/dto/create-offer.dto';
import { ValidationService } from '../validations/validation.service';

@Injectable()
export class OfferDistributorService {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
    @Inject(ValidationService)
    private readonly validationService: ValidationService,
    @Inject(OffersModelService)
    private readonly offersModelService: OffersModelService,
    @Inject(Offer2Service)
    private readonly offer2Service: Offer2Service,
    @Inject(Offer1Service)
    private readonly offer1Service: Offer1Service,
  ) {}

  /**
   * Gathers offer entries and pushes valid ones to database.
   */
  public async distribute() {
    try {
      const payload1 =
        (await this.offer1Service.fetchOffer()) as CreateOfferDto[];
      const payload2 =
        (await this.offer2Service.fetchOffer()) as CreateOfferDto[];
      const entries = [...payload1, ...payload2];
      const validEntries = this.validationService.validateOfferEntries(entries);

      await this.offersModelService.create(validEntries);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
