import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpLoginComponent } from './General/emp-login/emp-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule,MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatTableModule,MatFormFieldModule,MatPaginatorModule,MatIconModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatCheckboxModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { LayoutModule } from '@angular/cdk/layout';
import { CashierhomepageComponent } from './Cashier/cashierhomepage/cashierhomepage.component';
import { CashierdashboardComponent } from './Cashier/cashierdashboard/cashierdashboard.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import { AllsalarylistComponent } from './Cashier/Salary_management/allsalarylist/allsalarylist.component';
import { PendingsalaryComponent } from './Cashier/Salary_management/pendingsalary/pendingsalary.component';
import { DonesalaryComponent } from './Cashier/Salary_management/donesalary/donesalary.component';
import { ManagerhomepageComponent } from './Manager/managerhomepage/managerhomepage.component';
import { ViewproductComponent } from './Manager/product_management/viewproduct/viewproduct.component';
import { AddproductComponent } from './Manager/product_management/addproduct/addproduct.component';
import { UpdateproductComponent } from './Manager/product_management/updateproduct/updateproduct.component';
import { OrderstatusComponent } from './Manager/order_management/orderstatus/orderstatus.component';
import { PersonalloanComponent } from './Manager/personalloan/personalloan.component';
import { MyprofileComponent } from './General/myprofile/myprofile.component';
import { UpdateprofileComponent } from './General/updateprofile/updateprofile.component';
import { DelieverydashboardComponent } from './Delievery_Boy/delieverydashboard/delieverydashboard.component';
import { DelieveryhomepageComponent } from './Delievery_Boy/delieveryhomepage/delieveryhomepage.component';
import { MyworkComponent } from './Delievery_Boy/mywork/mywork.component';
import { ViewcategoryComponent } from './Manager/viewcategory/viewcategory.component';
import { UpdatecategoryComponent } from './Manager/updatecategory/updatecategory.component';
import { AddcategoryComponent } from './Manager/addcategory/addcategory.component';
import { WorkerHomepageComponent } from './Worker/worker-homepage/worker-homepage.component';
import { MyloanComponent } from './Manager/myloan/myloan.component';
import { UploadImageComponent } from './Manager/product_management/upload-image/upload-image.component';
import { DialogboxComponent } from './General/dialogbox/dialogbox.component';
import { ForgetPasswordComponent } from './General/forget-password/forget-password.component';
import { ChangepasswordComponent } from './General/changepassword/changepassword.component';
import { LeavemanagementComponent } from './General/leavemanagement/leavemanagement.component';
import { MyleaveComponent } from './General/myleave/myleave.component';
import { TermsandconditionComponent } from './General/termsandcondition/termsandcondition.component';
import { OrderdetailsComponent } from './Cashier/orderdetails/orderdetails.component';
import { PageNotFoundComponent } from './General/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpLoginComponent,
    CashierhomepageComponent,
    CashierdashboardComponent,
    ViewbillComponent,
    BillDetailsComponent,
    AllsalarylistComponent,
    PendingsalaryComponent,
    DonesalaryComponent,
    ManagerhomepageComponent,
    ViewproductComponent,
    AddproductComponent,
    UpdateproductComponent,
    OrderstatusComponent,
    PersonalloanComponent,
    MyprofileComponent,
    UpdateprofileComponent,
    DelieverydashboardComponent,
    DelieveryhomepageComponent,
    MyworkComponent,
    ViewcategoryComponent,
    UpdatecategoryComponent,
    AddcategoryComponent,
    WorkerHomepageComponent,
    MyloanComponent,
    UploadImageComponent,
    DialogboxComponent,
    ForgetPasswordComponent,
    ChangepasswordComponent,
    LeavemanagementComponent,
    MyleaveComponent,
    TermsandconditionComponent,
    OrderdetailsComponent,
    PageNotFoundComponent
  ],
  entryComponents: [DialogboxComponent],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
