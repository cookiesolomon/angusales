import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

 customers: any = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  this.customers = this.customerService.getAllCustomers().subscribe(data => {
    this.customers = data;
  });
  console.log(this.customers);
  }

}
