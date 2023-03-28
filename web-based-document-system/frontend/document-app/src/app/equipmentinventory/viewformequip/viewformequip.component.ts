import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewformequipService } from './viewformequip.service'; 

@Component({
  selector: 'app-viewformequip',
  templateUrl: './viewformequip.component.html',
  styleUrls: ['./viewformequip.component.css']
})
export class ViewformequipComponent implements OnInit {
  userId:string = '';
  
  userDetails:any;
  constructor(private activatedroute:ActivatedRoute, private equipviewS:ViewformequipService) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.equipviewS.viewequipForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log(data);
    })
  }

  
  
}
