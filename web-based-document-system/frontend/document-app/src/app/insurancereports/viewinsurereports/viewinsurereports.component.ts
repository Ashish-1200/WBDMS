import { Component, OnInit } from '@angular/core';
import { ViewIRService } from './viewireport.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewinsurereports',
  templateUrl: './viewinsurereports.component.html',
  styleUrls: ['./viewinsurereports.component.css']
})
export class ViewinsurereportsComponent implements OnInit {
  userIdStr:string = '';
  public currentFreport: any;
  userinfo:any;

  constructor(private activatedRouteObj:ActivatedRoute, private IreportServiceObj:ViewIRService) { }

  ngOnInit(): void {
  this.activatedRouteObj.params.subscribe(paramsObj =>{
  this.userIdStr = paramsObj['id']
  console.log(paramsObj)
  })
  
  this.IreportServiceObj.viewIreport(this.userIdStr).subscribe(responseData =>{
    this.userinfo = responseData;
    console.log(responseData);
  })}
  }