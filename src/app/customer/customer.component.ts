import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Input() btnText: string;
  @Output() customerButtonClick: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit() {
  }

  clickFunc() {
    this.customerButtonClick.emit(this.customer);
  }

}
