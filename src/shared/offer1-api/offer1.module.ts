import { Module } from '@nestjs/common';

import { Offer1Service } from './offer1.service';

@Module({
  providers: [Offer1Service],
  exports: [Offer1Service],
})
export class Offer1Module {}
