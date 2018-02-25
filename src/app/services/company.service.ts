import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  companies: Array<Company>;

  constructor(private http: HttpClient) { }


   getAllCompanies() {
    console.log(this.companies);
    return this.http.get('/api/companies');

   }


}
