import { Injectable } from '@nestjs/common';

import { payload } from './payload/offer1.payload';
import { MapOfferToEntity } from 'src/common/decorators/mapper.decorator';

@Injectable()
export class Offer1Service {
  @MapOfferToEntity('offer1')
  public async fetchOffer(): Promise<unknown> {
    return Promise.resolve(payload);
  }
}
