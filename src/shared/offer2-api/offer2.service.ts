import { Injectable } from '@nestjs/common';

import { payload } from './payload/offer2.payload';
import { MapOfferToEntity } from 'src/common/decorators/mapper.decorator';

@Injectable()
export class Offer2Service {
  @MapOfferToEntity('offer2')
  public async fetchOffer(): Promise<unknown> {
    return Promise.resolve(payload);
  }
}
