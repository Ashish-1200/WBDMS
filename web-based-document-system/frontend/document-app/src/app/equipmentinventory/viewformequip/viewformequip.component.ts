import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewformequipService } from './viewformequip.service'; 

@Component({
  selector: 'app-viewformequip',
  templateUrl: './viewformequip.component.html',
  styleUrls: ['./viewformequip.component.css']
})
export class ViewformequipComponent implements OnInit {
   userIdStr:string = '';
  //public currentFreport: any;
  userinfo:any;
  constructor(private activatedroute:ActivatedRoute, private equipviewS:ViewformequipService) { }



  ngOnInit(): void {
    this.activatedroute.params.subscribe(paramsObj =>{
    this.userIdStr = paramsObj['id']
    console.log(paramsObj)
    })
    
    this.equipviewS.viewequipForm(this.userIdStr).subscribe(responseData =>{
      this.userinfo = responseData;
      console.log(responseData);
    })}
    }
