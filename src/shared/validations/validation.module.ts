import { Logger, Module } from '@nestjs/common';

import { ValidationService } from './validation.service';

@Module({
  providers: [ValidationService, Logger],
  exports: [ValidationService],
})
export class ValidationModule {}
