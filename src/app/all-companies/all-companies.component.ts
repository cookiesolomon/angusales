import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {
  companies: any = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companies = this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    });
  }

}
