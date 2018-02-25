import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { CompanyComponent } from './company/company.component';
import { CompanyEditorComponent } from './company-editor/company-editor.component';
import { CustomerEditorComponent } from './customer-editor/customer-editor.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AllCustomersComponent,
    AllCompaniesComponent,
    CompanyComponent,
    CompanyEditorComponent,
    CustomerEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
