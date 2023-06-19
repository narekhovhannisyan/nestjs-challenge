import {
  Offer1ResponseDTO,
  OfferDTO,
} from '../../shared/offer1-api/dto/offer1.dto';
import { Offer2ResponseDTO } from '../../shared/offer2-api/dto/offer2.dto';
import { CreateOfferDto } from 'src/repo/main/offers/dto/create-offer.dto';

type OfferType = 'offer1' | 'offer2';

/**
 * Mapper function for the Offer1 API response for being OffersEntity friendly.
 */
function mapOffer1ResponseToEntity(
  apiResponse: Offer1ResponseDTO,
): CreateOfferDto[] {
  try {
    const offers: CreateOfferDto[] = apiResponse.response.offers.map(
      (offerDTO: OfferDTO) => {
        const offer: CreateOfferDto = new CreateOfferDto();

        offer.externalOfferId = offerDTO.offer_id;
        offer.name = offerDTO.offer_name;
        offer.description = offerDTO.offer_desc;
        offer.requirements = offerDTO.call_to_action;
        offer.offerUrlTemplate = offerDTO.offer_url;
        offer.thumbnail = offerDTO.image_url;
        offer.slug = '';
        offer.isDesktop = offerDTO.platform === 'desktop' ? 1 : 0;
        offer.isAndroid = offerDTO.device !== 'iphone_ipad' ? 1 : 0;
        offer.isIos = offerDTO.device === 'iphone_ipad' ? 1 : 0;
        offer.providerName = 'offer1';

        return offer;
      },
    );

    return offers;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Mapper function for the Offer2 API response for being OffersEntity friendly.
 */
function mapOffer2ResponseToEntity(
  apiResponse: Offer2ResponseDTO,
): CreateOfferDto[] {
  const data = apiResponse.data;
  const offerIds = Object.keys(data);

  return offerIds.map((offerId) => {
    const offerData = data[offerId];
    const offer: CreateOfferDto = new CreateOfferDto();

    offer.name = offerData.Offer.name;
    offer.slug = '';
    offer.description = offerData.Offer.description;
    offer.requirements = offerData.Offer.instructions;
    offer.thumbnail = offerData.Offer.icon;
    offer.isDesktop = offerData.OS.web ? 1 : 0;
    offer.isAndroid = offerData.OS.android ? 1 : 0;
    offer.isIos = offerData.OS.ios ? 1 : 0;
    offer.offerUrlTemplate = offerData.Offer.tracking_url;
    offer.providerName = 'offer2';
    offer.externalOfferId = offerData.Offer.campaign_id.toString();

    return offer;
  });
}

/**
 * Decorator for handling API response to OfferEntity convertion on fetching.
 */
export function MapOfferToEntity(type: OfferType) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    const realMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const result = await realMethod.apply(this, args);

      switch (type) {
        case 'offer1':
          return mapOffer1ResponseToEntity(result);
        case 'offer2':
          return mapOffer2ResponseToEntity(result);
      }
    };
  };
}
