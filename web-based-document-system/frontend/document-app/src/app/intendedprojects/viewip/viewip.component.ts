import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewIPService } from './viewip.service'; 

@Component({
  selector: 'app-viewip',
  templateUrl: './viewip.component.html',
  styleUrls: ['./viewip.component.css']
})
export class ViewipComponent implements OnInit {

  userIdStr:string = '';
  public currentIPreport: any;
  userinfo:any;

  constructor(private activatedRouteObj:ActivatedRoute, private IPreportServiceObj:ViewIPService) { }

ngOnInit(): void {
this.activatedRouteObj.params.subscribe(paramsObj =>{
this.userIdStr = paramsObj['id']
console.log(paramsObj)
})

this.IPreportServiceObj.viewIPreport(this.userIdStr).subscribe(responseData =>{
  this.userinfo = responseData;
  console.log(responseData);
})}
}
