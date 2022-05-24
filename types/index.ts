export type DestinationType = {
  label: string;
  imageUrl: string;
};

export type DestinationsType = DestinationType[];

export type DestinationsAllType = {
  [key: string]: DestinationsType;
};

export type DetailType = {
  attractions: string[];
  expense: string;
  description: string;
};

export type DetailsAllType = {
  [key: string]: DetailType;
};
