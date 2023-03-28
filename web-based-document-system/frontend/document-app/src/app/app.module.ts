import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import {  HttpClientModule,  } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {  MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { HomepageComponent } from './homepage/homepage.component';
//import { MatTableDataSource } from '@angular/material/table';
import { EquipmentinventoryComponent } from './equipmentinventory/equipmentinventory.component';
//import { EventComponent } from './event/event.component';
//import { FinincialreportsComponent } from './finincialreports/finincialreports.component';
//import { InsurancereportsComponent } from './insurancereports/insurancereports.component';
//import { IntendedprojectsComponent } from './intendedprojects/intendedprojects.component';
//import { PoliciesComponent } from './policies/policies.component';
import { IncidentreportsComponent } from './incidentreports/incidentreports.component';
import { UserupdateComponent } from './userupdate/userupdate.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateformComponent } from './incidentreports/createform/createform.component';
import { ViewformComponent } from './incidentreports/viewform/viewform.component';
import { UpdateformComponent } from './incidentreports/updateform/updateform.component';
//import { ActivatedRoute } from '@angular/router';
import { incidentreportservice } from './incidentreports/incidentreport.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CreateformequipComponent } from './equipmentinventory/createformequip/createformequip.component';

import { ViewformequipComponent } from './equipmentinventory/viewformequip/viewformequip.component';
import { equipinventoryservice } from './equipmentinventory/equipmentinventory.service';
import { UpdateformequipComponent } from './equipmentinventory/updateformequip/updateformequip.component';





@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    HomepageComponent,
   IncidentreportsComponent,
    EquipmentinventoryComponent,
    //EventComponent,
    //FinincialreportsComponent,
    //InsurancereportsComponent,
    //IntendedprojectsComponent,
    //PoliciesComponent,
    UserupdateComponent,
    MainpageComponent,
    
CreateformComponent,
    ViewformComponent,
    UpdateformComponent,

    CreateformequipComponent,
   UpdateformequipComponent,
    ViewformequipComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
  HttpClientModule,
  MatPaginatorModule,
  BrowserAnimationsModule,
  MatTableModule,
  MatPaginatorModule,
  FormsModule,
  MatSortModule,
  RouterModule,
  MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    //MatTableDataSource
  

  
  

  
  ],
providers: [ LoginService, SignupService, UsersService, incidentreportservice, equipinventoryservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
