import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewfreportService } from './viewfreports.service'; 
@Component({
  selector: 'app-viewfreports',
  templateUrl: './viewfreports.component.html',
  styleUrls: ['./viewfreports.component.css']
})
export class ViewfreportsComponent implements OnInit {

  userIdStr:string = '';
  public currentFreport: any;
  userinfo:any;

  constructor(private activatedRouteObj:ActivatedRoute, private freportServiceObj:ViewfreportService) { }

ngOnInit(): void {
this.activatedRouteObj.params.subscribe(paramsObj =>{
this.userIdStr = paramsObj['id']
console.log(paramsObj)
})

this.freportServiceObj.viewfreport(this.userIdStr).subscribe(responseData =>{
  this.userinfo = responseData;
  console.log(responseData);
})}
}