import { Address } from './address';
import { Company } from './company';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  isAdmin? : boolean;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
