export interface Customer {

    firstname: string;
    lastname: string;
    email: string;
    features: Features;
}

export interface Features {
  address: string;
  country: string;
  region: string;
  price: number;
}
