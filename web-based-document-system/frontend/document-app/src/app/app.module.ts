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
import { IncidentreportsComponent } from './incidentreports/incidentreports.component';
import { EquipmentinventoryComponent } from './equipmentinventory/equipmentinventory.component';
import { EventComponent } from './event/event.component';


import { IntendedprojectsComponent } from './intendedprojects/intendedprojects.component';
import { PoliciesComponent } from './policies/policies.component';

//import { UserupdateComponent } from './userupdate/userupdate.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { CreateformComponent } from './incidentreports/createform/createform.component';
import { ViewformComponent } from './incidentreports/viewform/viewform.component';
import { UpdateformComponent } from './incidentreports/updateform/updateform.component';
import { incidentreportservice } from './incidentreports/incidentreport.service';
//import { ActivatedRoute } from '@angular/router';

import { CreateformequipComponent } from './equipmentinventory/createformequip/createformequip.component';
import { ViewformequipComponent } from './equipmentinventory/viewformequip/viewformequip.component';
import { equipinventoryservice } from './equipmentinventory/equipmentinventory.service';
import { UpdateformequipComponent } from './equipmentinventory/updateformequip/updateformequip.component';

import { UpdateformeventComponent } from './event/updateformevent/updateformevent.component';
import { CreateformeventComponent } from './event/createformevent/createformevent.component';
import { eventservice } from './event/event.service';
import { ViewformeventComponent } from './event/viewformevent/viewformevent.component';
import { FreportsComponent } from './freports/freports.component';
import { UpdatefreportsComponent } from './freports/updatefreports/updatefreports.component';
import { CreatefreportsComponent } from './freports/createfreports/createfreports.component';
import { ViewfreportsComponent } from './freports/viewfreports/viewfreports.component';
import { freportservice } from './freports/freports.service';
import { insurereportservice } from './insurancereports/insurancereports.service';
import { ViewinsurereportsComponent } from './insurancereports/viewinsurereports/viewinsurereports.component';
import { CreateinsurereportsComponent } from './insurancereports/createinsurereports/createinsurereports.component';
import { UpdateinsurereportsComponent } from './insurancereports/updateinsurereports/updateinsurereports.component';
import { InsurancereportComponent } from './insurancereports/insurancereport.component';
import { ViewpolicyComponent } from './policies/viewpolicy/viewpolicy.component';
import { CreatepolicyComponent } from './policies/createpolicy/createpolicy.component';
import { UpdatepolicyComponent } from './policies/updatepolicy/updatepolicy.component';

import { intendservice } from './intendedprojects/intendproject.service';
import { ViewipComponent } from './intendedprojects/viewip/viewip.component';
import { CreateipComponent } from './intendedprojects/createip/createip.component';
import { UpdateipComponent } from './intendedprojects/updateip/updateip.component';







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
    EventComponent,
    FreportsComponent,
    IntendedprojectsComponent,
  InsurancereportComponent,
  PoliciesComponent,
   //UserupdateComponent,
    MainpageComponent,


CreateformComponent,
    ViewformComponent,
    UpdateformComponent,

    CreateformequipComponent,
   UpdateformequipComponent,
    ViewformequipComponent,

    CreateformeventComponent,
    UpdateformeventComponent,
    ViewformeventComponent,
    
    UpdatefreportsComponent,
    CreatefreportsComponent,
    ViewfreportsComponent,

    ViewinsurereportsComponent,
    CreateinsurereportsComponent,
    UpdateinsurereportsComponent,
    
    ViewpolicyComponent,
    CreatepolicyComponent,
    UpdatepolicyComponent,

    ViewipComponent,
    CreateipComponent,
    UpdateipComponent
   
  

    
    

  
   
    
    
    
    
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
providers: [ LoginService, SignupService, UsersService, incidentreportservice, equipinventoryservice, eventservice, freportservice, insurereportservice, intendservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
