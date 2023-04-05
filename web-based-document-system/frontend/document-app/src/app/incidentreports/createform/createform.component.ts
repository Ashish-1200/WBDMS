import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {
  
 
  

documents: any;
mediaFiles: FileList | null = null;
mediainfo: any;
useridentity: any;

form = new FormGroup({
  
  department: new FormControl('', Validators.required),
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  age: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  dateOfIncident: new FormControl('', Validators.required),
  location: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
 // commentbox: new FormControl('', Validators.required),
  mediaFiles: new FormControl(null as FileList | null, Validators.required)
});

  constructor(private _snackBar: MatSnackBar, 
    private http: HttpClient,
    private router: Router, ) { }
    


  ngOnInit(): void { }

  select(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
    const file = inputElement.files[0];
    if (file && this.isAllowedMimeType(file.type)) {
    this.documents = file;
    const reader = new FileReader();
    reader.onload = () => {
    this.mediainfo = reader.result;
    };
    reader.readAsDataURL(file);
    } else {
    this.resetForm();
    this.showSnackBar('Invalid file type');
    }
    }
    }
    
    private isAllowedMimeType(mimeType: string): boolean {
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf',
    'application/msword', 'video/mp4', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return allowedMimeTypes.includes(mimeType);
    }

  SaveData() {
    const formData = new FormData();
    
    formData.append('department', this.form.value.department|| '');
    formData.append('firstName', this.form.value.firstName || '');
    formData.append('lastName', this.form.value.lastName || '');
    formData.append('gender', this.form.value.gender || '');
    formData.append('age', this.form.value.age || '');
    formData.append('address', this.form.value.address || '');
    formData.append('dateOfIncident', this.form.value.dateOfIncident || '');
    formData.append('location', this.form.value.location || '');
    formData.append('description', this.form.value.description || '');
   // formData.append('commentbox', this.form.value.location || '');
    formData.append('mediaFiles', this.documents);
    
    this.http.post<any>('http://localhost:3000/incidentreport/create', formData).subscribe((response) => {
      this.resetForm();
      this.showSnackBar('Uploaded Successfully');
      this.router.navigateByUrl(`/viewform/${response._id}`);
    });
    
    }
    
    private resetForm(): void {
    this.form.reset();
    this.mediainfo = null;
    this.documents = null;
    }
    
    private showSnackBar(message: string): void {
    this._snackBar.open(message, 'Uploaded Successfully', { verticalPosition: 'top', panelClass: 'edit' });
    }
    }

 

