import { Module } from '@nestjs/common';

import { Offer2Service } from './offer2.service';

@Module({
  providers: [Offer2Service],
  exports: [Offer2Service],
})
export class Offer2Module {}
