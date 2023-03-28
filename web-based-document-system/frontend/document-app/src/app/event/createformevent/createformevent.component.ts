import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateformeventService } from './createformevent.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createformevent',
  templateUrl: './createformevent.component.html',
  styleUrls: ['./createformevent.component.css']
})
export class CreateformeventComponent implements OnInit {

  images:any;
  productImage=[];
  imageData:any;
  userId: any;


  constructor(private _snackBar: MatSnackBar, private createformeventService: CreateformeventService,
    private http: HttpClient,
    private router: Router, ) { }
    

  form = new FormGroup({
    UserID: new FormControl(''),
    department: new FormControl('', Validators.required),
    eventName: new FormControl('', Validators.required),
    eventDes: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    
   // commentbox: new FormControl('', Validators.required),
    productImage: new FormControl(null as FileList | null, Validators.required)


  });

  ngOnInit(): void { }

  select(event:any){
    {
      const file = (event.target as HTMLInputElement).files;
      this.form.patchValue({ productImage: file});
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg","application/pdf","application/msword","video/mp4","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        if(file){
        reader.readAsDataURL(file[0]);
        }
      }
      const productImage = event.target.files[0];
      this.images=productImage;
      console.log(productImage)
  
  
       }

  
       this.userId =localStorage.getItem('_id')
       //let UserID=this.userId






     }

  SaveData() {
    const formData = new FormData();
    formData.append('UserID', this.userId);
    formData.append('department', this.form.value.department|| '');
    formData.append('eventName', this.form.value.eventName || '');
    formData.append('eventDes', this.form.value.eventDes || '');
    formData.append('eventDate', this.form.value.eventDate || '');
    
   // formData.append('commentbox', this.form.value.location || '');
    formData.append('productImage', this.images);
    

    this.http.post<any>('http://localhost:3000/event/create', formData).subscribe((d) => {
      console.log(d);

      this.form.reset();

      this._snackBar.open('Uploaded Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit'
      })

      this.router.navigateByUrl(`/viewform/${d._id}`);
    });
  }

 
}