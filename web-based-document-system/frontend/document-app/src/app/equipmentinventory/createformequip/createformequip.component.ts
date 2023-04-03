import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import {EquipmentService } from './createformequip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createformequip',
  templateUrl: './createformequip.component.html',
  styleUrls: ['./createformequip.component.css']
})
export class CreateformequipComponent implements OnInit {
  documents: any;
mediaFiles: FileList | null = null;
mediainfo: any;
useridentity: any;

form = new FormGroup({
  userID: new FormControl(''),
  DepartmentName: new FormControl('', Validators.required),
  Project: new FormControl('', Validators.required),
  DateOfProject: new FormControl('', Validators.required),
  EquipmentDescription: new FormControl('', Validators.required),
  SerialNo: new FormControl('', Validators.required),
  DateAcquired: new FormControl('', Validators.required),
  CostOfEquipment: new FormControl('', Validators.required),
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
    formData.append('userID', this.mediainfo);
    formData.append('DepartmentName', this.form.value.DepartmentName|| '');
    formData.append('Project', this.form.value.Project|| '');
    formData.append('DateOfProject', this.form.value.DateOfProject || '');
    formData.append('EquipmentDescription', this.form.value.EquipmentDescription || '');
    formData.append('SerialNo', this.form.value.SerialNo || '');
    formData.append('DateAcquired', this.form.value.DateAcquired || '');
    formData.append('CostOfEquipment', this.form.value.CostOfEquipment || '');
    
    formData.append('description', this.form.value.description || '');
   
    formData.append('mediaFiles', this.documents);
    

  
      this.http.post<any>('http://localhost:3000/equipmentinventory/create', formData).subscribe((response) => {
  this.resetForm();
  this.showSnackBar('Uploaded Successfully');
  this.router.navigateByUrl(`/viewfreports/${response._id}`);
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

