import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company = new Company();
  @Input() btnText: string;
  @Output() companyButtonClick: EventEmitter<Company> = new EventEmitter<Company>();

  constructor() { }

  ngOnInit() {
  }

  clickFunc() {
    this.companyButtonClick.emit(this.company);
  }

}
