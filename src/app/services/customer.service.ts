import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

 customers: Array<Customer>;

  constructor(private http: HttpClient) { }


   getAllCustomers() {
    this.http.get('/api/customers/');
   }


}
