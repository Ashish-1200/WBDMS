import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewPolicyService } from './viewpolicy.service';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {
  userIdStr:string = '';
  public currentFreport: any;
  userinfo:any;
  constructor(private activatedRouteObj:ActivatedRoute, private PolicyService:ViewPolicyService) { }

ngOnInit(): void {
this.activatedRouteObj.params.subscribe(paramsObj =>{
this.userIdStr = paramsObj['id']
console.log(paramsObj)
})

this.PolicyService. viewpolicyreport(this.userIdStr).subscribe(responseData =>{
  this.userinfo = responseData;
  console.log(responseData);
})}
}
