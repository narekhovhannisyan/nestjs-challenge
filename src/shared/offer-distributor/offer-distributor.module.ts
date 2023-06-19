import { Logger, Module } from '@nestjs/common';

import { OfferDistributorService } from './offer-distributor.service';

import { Offer1Module } from '../offer1-api/offer1.module';
import { Offer2Module } from '../offer2-api/offer2.module';
import { OffersEntityModule } from 'src/repo/main/offers/offers.module';
import { ValidationModule } from '../validations/validation.module';

@Module({
  imports: [Offer1Module, Offer2Module, OffersEntityModule, ValidationModule],
  providers: [OfferDistributorService, Logger],
  exports: [OfferDistributorService],
})
export class OfferDistributorModule {}
