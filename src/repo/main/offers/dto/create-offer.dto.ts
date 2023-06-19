import { MaxLength, Allow, IsString, IsNumber } from 'class-validator';

export class CreateOfferDto {
  // offer name
  @MaxLength(255)
  name: string;

  // unique identifier for offer
  @MaxLength(255)
  slug: string;

  // offer description
  @IsString()
  description: string;

  // offer requirements
  @IsString()
  requirements: string;

  // offer thumbnail image url
  @MaxLength(255)
  thumbnail: string;

  // indicates if offer is available for desktop
  @IsNumber()
  isDesktop: number;

  // indicates if offer is available for android
  @IsNumber()
  isAndroid: number;

  // indicates if offer is available for ios
  @Allow()
  isIos: number;

  // offer url template
  @MaxLength(256)
  offerUrlTemplate: string;

  // provider name - this should be static for each offer type
  // we're attaching two offer payloads - offer1, offer2
  // so for offer1 payload, this should be "offer1"
  // for offer2 payload, this should be "offer2"
  @MaxLength(255)
  providerName: string;

  // offer id from external provider
  @MaxLength(255)
  externalOfferId: string;
}
