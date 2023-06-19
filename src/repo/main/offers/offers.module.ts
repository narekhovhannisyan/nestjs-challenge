import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OffersModelService } from './offers.service';
import { OfferEntity } from './entities/offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OfferEntity])],
  providers: [OffersModelService],
  exports: [OffersModelService],
})
export class OffersEntityModule {}
