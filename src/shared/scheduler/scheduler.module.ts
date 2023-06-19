import { Logger, Module } from '@nestjs/common';

import { SchedulerService } from './scheduler.service';
import { OfferDistributorModule } from '../offer-distributor/offer-distributor.module';
import { OffersEntityModule } from 'src/repo/main/offers/offers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [OffersEntityModule, OfferDistributorModule, ConfigModule],
  providers: [SchedulerService, Logger],
  exports: [SchedulerService],
})
export class SchedulerModule {}
