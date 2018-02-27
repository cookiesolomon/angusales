import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Output() deleteBtn: EventEmitter<Customer> = new EventEmitter<Customer>();
  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  deleteFunc() {
    this.deleteBtn.emit(this.customer);
    console.log(this.customer);

  }

}
