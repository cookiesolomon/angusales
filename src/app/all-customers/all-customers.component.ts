import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
title: string;
 customers: any = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  this.title = 'Customers';
  this.customerService.getAllCustomers();
  this.customers = this.customerService.getAllCustomers().subscribe(data => {
    this.customers = data;
  });
  }

  deleteFunc(customer, id) {
    console.log(customer.id);
    console.log('hello');
    this.customerService.deleteFunc(customer, id).subscribe(data => {
   this.customerService.getAllCustomers();
  });
}
}
