interface OfferDTO {
  campaign_id: number;
  store_id: null | number;
  tracking_type: string;
  campaign_vertical: string;
  currency_name_singular: string;
  currency_name_plural: string;
  network_epc: string;
  icon: string;
  name: string;
  tracking_url: string;
  instructions: string;
  disclaimer: null | string;
  description: string;
  short_description: string;
  offer_sticker_text_1: string;
  offer_sticker_text_2: null | string;
  offer_sticker_text_3: null | string;
  offer_sticker_color_1: string;
  offer_sticker_color_2: string;
  offer_sticker_color_3: string;
  sort_order_setting: null;
  category_1: string;
  category_2: null | string;
  amount: number;
  payout_usd: number;
  start_datetime: string;
  end_datetime: string;
  is_multi_reward: boolean;
}

interface CountryDTO {
  include: { [key: string]: { id: number; code: string; name: string } };
  exclude: string[];
}

interface StateDTO {
  include: string[];
  exclude: string[];
}

interface CityDTO {
  include: string[];
  exclude: string[];
}

interface ConnectionTypeDTO {
  cellular: boolean;
  wifi: boolean;
}

interface DeviceDTO {
  include: string[];
  exclude: string[];
}

interface OSDTO {
  android: boolean;
  ios: boolean;
  web: boolean;
  min_ios: null | number;
  max_ios: null | number;
  min_android: null | number;
  max_android: null | number;
}

export interface Offer2ResponseDTO {
  status: string;
  data: {
    [key: string]: {
      Offer: OfferDTO;
      Country: CountryDTO;
      State: StateDTO;
      City: CityDTO;
      Connection_Type: ConnectionTypeDTO;
      Device: DeviceDTO;
      OS: OSDTO;
    };
  };
}
