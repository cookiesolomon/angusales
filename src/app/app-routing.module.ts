import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Customer } from './models/customer';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';

const routes: Routes = [
  { path: 'customers', component: AllCustomersComponent},
  { path: 'companies', component: AllCompaniesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
