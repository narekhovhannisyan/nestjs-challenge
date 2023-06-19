import { Inject, Injectable, Logger } from '@nestjs/common';
import { validateSync } from 'class-validator';

import { CreateOfferDto } from 'src/repo/main/offers/dto/create-offer.dto';

@Injectable()
export class ValidationService {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
  ) {}

  /**
   * Validate entries before pushing.
   */
  public validateOfferEntries(entries: CreateOfferDto[]) {
    const validEntries = entries.filter((entry) => {
      const check = validateSync(entry);

      if (check.length > 0) {
        this.logger.warn(`validation error for ${JSON.stringify(entry)}.`);
      }

      return check.length === 0;
    });

    return validEntries;
  }
}
