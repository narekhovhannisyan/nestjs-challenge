import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { OfferDistributorService } from '../offer-distributor/offer-distributor.service';

import config from 'src/config';

const { CRON_RULE } = config();

@Injectable()
export class SchedulerService {
  public cronRule: string;
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
    @Inject(OfferDistributorService)
    private readonly offerDistributorService: OfferDistributorService,
  ) {}

  @Cron(CRON_RULE)
  handleCron() {
    this.logger.debug('Called when the current second is 45');
    this.offerDistributorService.distribute();
  }
}
