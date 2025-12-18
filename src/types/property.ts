export interface Property {
  id: number;
  type: string;
  price: string;
  homeAddress: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  daysOnHouzeo: number;
  views?: string;
  source?: string;
  images: string[];
}
