
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewformeventService } from './viewformevent.service';
@Component({
  selector: 'app-viewformevent',
  templateUrl: './viewformevent.component.html',
  styleUrls: ['./viewformevent.component.css']
})
export class ViewformeventComponent implements OnInit {
  userId:string = '';
  userDetails:any;
  constructor(private activatedroute:ActivatedRoute, private eventviewS:ViewformeventService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.eventviewS.vieweventForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log(data);
    })
  }

  
  
}
