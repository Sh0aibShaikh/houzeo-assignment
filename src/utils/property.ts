import { Property } from "../types/property";
import prop1 from "../assets/property-1.png";
import prop2 from "../assets/property-2.png";
import prop3 from "../assets/property-3.png";
import prop4 from "../assets/property-4.png";

export const properties: Property[] = [
  {
    id: 1,
    type: "House For Sale",
    price: "$3,349,000",
    homeAddress: "2856 Meadow Park Ave,",
    address: "Henderson, NV 89052",
    beds: 4,
    baths: 3,
    sqft: 998,
    daysOnHouzeo: 6,
    views: "2.3K",
    source: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    images: [prop1, prop2, prop3, prop4],
  },
  {
    id: 2,
    type: "Condo For Sale",
    price: "$3,349,000",
    homeAddress: "2856 Meadow Park Ave,",
    address: "Henderson, NV 89052",
    beds: 4,
    baths: 3,
    sqft: 998,
    daysOnHouzeo: 12,
    views: "2.3K",
    source: "Sotheby's International Realty",
    images: [prop2, prop3, prop4, prop1],
  },
  {
    id: 3,
    type: "Multi-family home For Sale",
    price: "$3,349,000",
    homeAddress: "2856 Meadow Park Ave,",
    address: "Henderson, NV 89052",
    beds: 4,
    baths: 3,
    sqft: 998,
    daysOnHouzeo: 0,
    views: "2.3K",
    source: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    images: [prop3, prop4, prop1, prop2],
  },
  {
    id: 4,
    type: "House For Sale",
    price: "$3,349,000",
    homeAddress: "2856 Meadow Park Ave,",
    address: "Henderson, NV 89052",
    beds: 4,
    baths: 3,
    sqft: 998,
    daysOnHouzeo: 10,
    views: "2.3K",
    source: "Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID",
    images: [prop4, prop1, prop2, prop3],
  },
];
