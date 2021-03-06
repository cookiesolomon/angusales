import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

 customers: Array<Customer>;

  constructor(private http: HttpClient) { }


   getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers');
   }

   deleteFunc(customer): Observable<Customer[]> {
     console.log(customer.id);
      return this.http.delete<Customer[]>('/api/customers/' + customer.id);
    // let custId = this.customers.findIndex(el => el.id === customer.id);
    // this.customers.splice(id, 1);
  }

   }


