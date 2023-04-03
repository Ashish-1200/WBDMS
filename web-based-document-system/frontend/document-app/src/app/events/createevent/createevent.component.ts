import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  documents: any;
mediaFiles: FileList | null = null;
mediainfo: any;
useridentity: any;

form = new FormGroup({
  UserID: new FormControl(''),
    department: new FormControl('', Validators.required),
    eventName: new FormControl('', Validators.required),
    eventDes: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
  mediaFiles: new FormControl(null, Validators.required)
  });


  constructor(private _snackBar: MatSnackBar, private http: HttpClient,
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
    formData.append('UserID', this.mediainfo);
    formData.append('department', this.form.value.department|| '');
    formData.append('eventName', this.form.value.eventName || '');
    formData.append('eventDes', this.form.value.eventDes || '');
    formData.append('eventDate', this.form.value.eventDate || '');
    formData.append('mediaFiles', this.documents);
   
    this.http.post<any>('http://localhost:3000/event/create', formData).subscribe((response) => {
  this.resetForm();
  this.showSnackBar('Uploaded Successfully');
  this.router.navigateByUrl(`/viewevent/${response._id}`);
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