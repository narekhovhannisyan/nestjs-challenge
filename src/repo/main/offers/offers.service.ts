import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateOfferDto } from './dto/create-offer.dto';
import { OfferEntity } from './entities/offer.entity';

@Injectable()
export class OffersModelService {
  constructor(
    @InjectRepository(OfferEntity)
    private offersRepository: Repository<OfferEntity>,
  ) {}

  create(createOfferDto: CreateOfferDto[]) {
    console.log(createOfferDto);
    // return this.offersRepository.create(createOfferDto);
  }
}
