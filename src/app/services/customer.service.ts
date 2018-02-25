import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

 customers: Array<Customer>;

  constructor(private http: HttpClient) { }


   getAllCustomers() {
    return this.http.get('/api/customers');
   }

   deleteFunc(customer, id) {
     console.log(customer.id);
      return this.http.delete('/api/customers/' + customer.id);

    // let custId = this.customers.findIndex(el => el.id === customer.id);
    // this.customers.splice(id, 1);
  }

   }


