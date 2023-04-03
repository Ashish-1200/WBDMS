import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UsersComponent } from './users/users.component';
import { IncidentreportsComponent } from './incidentreports/incidentreports.component';

import { CreateformComponent } from './incidentreports/createform/createform.component';
import { UpdateformComponent } from './incidentreports/updateform/updateform.component';
import { ViewformComponent } from './incidentreports/viewform/viewform.component';
import { Incidentreportauth } from './authentication/incidentreport.auth';
import { authentication } from './authentication/authentication';

import { EquipmentinventoryComponent } from './equipmentinventory/equipmentinventory.component';
import { CreateformequipComponent } from './equipmentinventory/createformequip/createformequip.component';
import { UpdateformequipComponent } from './equipmentinventory/updateformequip/updateformequip.component';
import { ViewformequipComponent } from './equipmentinventory/viewformequip/viewformequip.component';


//import { Equipauth } from './authentication/equip.auth';
//import { eventauth } from './authentication/event.auth';
import { FreportsComponent } from './freports/freports.component';
import { CreatefreportsComponent } from './freports/createfreports/createfreports.component';
//import { UpdatefreportService } from './freports/updatefreports/updatefreports.service';
import { ViewfreportsComponent } from './freports/viewfreports/viewfreports.component';
import { UpdatefreportsComponent } from './freports/updatefreports/updatefreports.component';
import { InsurancereportComponent } from './insurancereports/insurancereport.component';
import { CreateinsurereportsComponent } from './insurancereports/createinsurereports/createinsurereports.component';
import { ViewinsurereportsComponent } from './insurancereports/viewinsurereports/viewinsurereports.component';
import { UpdateinsurereportsComponent } from './insurancereports/updateinsurereports/updateinsurereports.component';
import { PoliciesComponent } from './policies/policies.component';
import { CreatepolicyComponent } from './policies/createpolicy/createpolicy.component';
import { ViewpolicyComponent } from './policies/viewpolicy/viewpolicy.component';
import { UpdatepolicyComponent } from './policies/updatepolicy/updatepolicy.component';

import { IntendedprojectsComponent } from './intendedprojects/intendedprojects.component';
import { CreateipComponent } from './intendedprojects/createip/createip.component';
import { ViewipComponent } from './intendedprojects/viewip/viewip.component';
import { UpdateipComponent } from './intendedprojects/updateip/updateip.component';
import { EventsComponent } from './events/events.component';
import { CreateeventComponent } from './events/createevent/createevent.component';
import { UpdateeventComponent } from './events/updateevent/updateevent.component';
import { VieweventComponent } from './events/viewevent/viewevent.component';






const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
 {path:'signup',component:SignupComponent},
 {path:'login',component:LoginComponent},
 {path:"map",component:MainpageComponent},
 {path:"reactiveforms",component:ReactiveFormsModule},
 {path:'mainpage',component:MainpageComponent},
 {path:'homepage',component:HomepageComponent},
 {path:"create",component:CreateuserComponent},
 {path:"users",component:UsersComponent,canActivate:[authentication]},
 {path: "incidentreports",component:IncidentreportsComponent,canActivate:[Incidentreportauth]},

 {path:"createform",component:CreateformComponent},
 {path:"updateform/:id",component:UpdateformComponent},
 {path:"viewform/:id",component:ViewformComponent},

 {path: "equipmentinventory",component:EquipmentinventoryComponent,},
 {path:"createformequip",component:CreateformequipComponent},
 {path:"updateformequip/:id",component:UpdateformequipComponent},
 {path:"viewformequip/:id",component:ViewformequipComponent},

 {path: "events",component:EventsComponent},
 {path:"createevent",component:CreateeventComponent},
 {path:"updateevent/:id",component:UpdateeventComponent},
 {path:"viewevent/:id",component:VieweventComponent},

 {path: "freports",component:FreportsComponent,},
 {path:"createfreports",component:CreatefreportsComponent},
 {path:"updatefreports/:id",component:UpdatefreportsComponent},
 {path:"viewfreports/:id",component:ViewfreportsComponent},

 {path: "insurancereport",component:InsurancereportComponent,},
 {path: "createinsurereports",component:CreateinsurereportsComponent,},
 {path: "viewinsurereports/:id",component:ViewinsurereportsComponent,},
 {path: "updateinsurereports/:id",component:UpdateinsurereportsComponent,},

 {path: "policies",component:PoliciesComponent,},
 {path: "createpolicy",component:CreatepolicyComponent,},
 {path: "viewpolicy/:id",component:ViewpolicyComponent,},
 {path: "updatepolicy/:id",component:UpdatepolicyComponent,},


 {path: "intendedprojects",component:IntendedprojectsComponent,},
 {path: "createip",component:CreateipComponent,},
 {path: "viewip/:id",component:ViewipComponent,},
 {path: "updateip/:id",component:UpdateipComponent,},

 

 


 


 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

