export interface CompanyDetails {
  data: Data;
}

export interface Data {
  getCompany: GetCompany;
}

export interface GetCompany {
  id: string;
  name: string;
  description: string;
  coverImageUrl: string;
  logoUrl: string;
  investmentRaised: number;
  investmentSought: number;
  numberOfInvestors: number;
  percentageRaised: number;
  endDate: string;
  valuation: number;
  country: string;
  city: string;
}

export interface Updates {
  items: any[];
}
