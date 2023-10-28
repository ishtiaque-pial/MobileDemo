export interface CompanyDetails {
  data: Data;
}

export interface Data {
  getCompany: CompanyData;
}

export interface CompanyData {
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
  updates: Updates;
}

export interface Updates {
  items: any[];
}
