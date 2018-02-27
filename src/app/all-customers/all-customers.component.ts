import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
 title: string;
 displayedColumns = ['firstName', 'lastName', 'company', 'email', 'phone', 'id', 'edit' ];
 customers: Customer[];
 dataSource: MatTableDataSource<Customer>;

 constructor(private customerService: CustomerService) { }

  ngOnInit() {
  this.title = 'Customers';
  // this.customerService.getAllCustomers();
  this.customerService.getAllCustomers().subscribe(
    data => {
      this.customers = data;
      this.dataSource = new MatTableDataSource(this.customers);
    },
    error =>
      console.error(error)
   );
  // this.customerService.getAllCustomers();
  // this.customers = this.customerService.getAllCustomers().subscribe(data => {
  //   this.customers = data;
  // });
  }

  deleteFunc(customer) {
    console.log(customer.id);
    console.log('hello');
    this.customerService.deleteFunc(customer).subscribe(data => {
    this.customerService.getAllCustomers().subscribe(customers => {
     this.customers = customers;
     this.dataSource = new MatTableDataSource(this.customers);
     });
  });
}
}
