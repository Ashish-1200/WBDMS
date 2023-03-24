
import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( public loginService:LoginService , private http: HttpClient,private router: Router,private _snackBar:MatSnackBar) { }
  


  isLoading = false;
  
  
  onLogin(form:NgForm){
    if(form.invalid){
      alert("Invalid Login!")
      return;
    }
    this.loginService.loginUser(form.value.Username,form.value.Password,form.value.UserType);
    this.loginService.updatemenu.next();

    
    //Prompted Error Message
    this._snackBar.open('Invalid!','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
  })
}

  /*onLogin() {
    this.http.post<{ token: string }>('http://localhost:3000/users/login', this.loginData)
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/homepage']);
      }, error => {
        console.log(error);
      });   */
  

  ngOnInit(): void {
    
  }
}