
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VieweventService } from './viewevent.service';
@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  userIdStr:string = '';
  
  userinfo:any;
  constructor(private activatedRouteObj:ActivatedRoute, private eventviewS:VieweventService) { }

  ngOnInit(): void {
    this.activatedRouteObj.params.subscribe(paramsObj =>{
      this.userIdStr = paramsObj['id']
      console.log(paramsObj)
      })
    this.eventviewS.vieweventForm(this.userIdStr).subscribe(data =>{
      this.userinfo = data;
      console.log(data);
    })
  }

  
  
}
