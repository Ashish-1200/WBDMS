import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from './signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  hidePassword = true;

  constructor(public signupService: SignupService, private _snackBar: MatSnackBar) {}

  userForm = new FormGroup({
    username: new FormControl('', Validators.required, this.signupService.checkUsernameAvailability.bind(this.signupService)),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required, this.signupService.checkEmailAvailability.bind(this.signupService)),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    userType: new FormControl('', [Validators.required])
  });

  submitForm() {
    if (this.userForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.signupService.addUserForm(this.userForm.value)
      .subscribe(() => {
        this.userForm.reset({});
        this._snackBar.open('Registration Successful', '', {
          verticalPosition: 'top',
          panelClass: 'edit'
        });
      })
      .add(() => {
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}
