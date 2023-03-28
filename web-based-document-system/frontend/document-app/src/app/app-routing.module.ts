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
import { EventComponent } from './event/event.component';
import { CreateformeventComponent } from './event/createformevent/createformevent.component';
import { UpdateformeventComponent } from './event/updateformevent/updateformevent.component';
import { ViewformeventComponent } from './event/viewformevent/viewformevent.component';
//import { Equipauth } from './authentication/equip.auth';
import { eventauth } from './authentication/event.auth';
import { FreportsComponent } from './freports/freports.component';
import { CreatefreportsComponent } from './freports/createfreports/createfreports.component';
import { UpdatefreportService } from './freports/updatefreports/updatefreports.service';
import { ViewfreportsComponent } from './freports/viewfreports/viewfreports.component';
import { UpdatefreportsComponent } from './freports/updatefreports/updatefreports.component';



//boom
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

 {path: "event",component:EventComponent,canActivate:[eventauth]},
 {path:"createformevent",component:CreateformeventComponent},
 {path:"updateformevent/:id",component:UpdateformeventComponent},
 {path:"viewformevent/:id",component:ViewformeventComponent},

 {path: "freports",component:FreportsComponent,},
 {path:"createfreports",component:CreatefreportsComponent},
 {path:"updatefreports/:id",component:UpdatefreportsComponent},
 {path:"viewfreports/:id",component:ViewfreportsComponent},



 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Method not implemented.');
} */