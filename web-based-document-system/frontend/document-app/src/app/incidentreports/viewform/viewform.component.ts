import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewformService } from './viewform.service'; 

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.css']
})
export class ViewformComponent implements OnInit {
  userId:string = '';
  
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute, private incidentviewS:ViewformService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.incidentviewS.viewincidentForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log(data);
    })
  }

}
