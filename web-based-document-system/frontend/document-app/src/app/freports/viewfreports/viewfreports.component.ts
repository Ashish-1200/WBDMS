import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewfreportService } from './viewfreports.service'; 
@Component({
  selector: 'app-viewfreports',
  templateUrl: './viewfreports.component.html',
  styleUrls: ['./viewfreports.component.css']
})
export class ViewfreportsComponent implements OnInit {

  userId:string = '';
  
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute, private freportviewS:ViewfreportService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.freportviewS. viewfreport(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log(data);
    })
  }

  
  
}
