import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Output() deleteBtn: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  deleteFunc() {
    this.deleteBtn.emit(this.customer);
    console.log(this.customer);

  }

}
