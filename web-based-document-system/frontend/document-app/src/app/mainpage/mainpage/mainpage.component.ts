import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  constructor(private router: Router) { }
  
  isLogged = false; // set default to false so that the section is hidden until user logs in

  login(){
    this.router.navigate(['/login']);
  }
}
