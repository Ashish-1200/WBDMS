import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreatefreportsService } from './createfreports.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createfreports',
  templateUrl: './createfreports.component.html',
  styleUrls: ['./createfreports.component.css']
})
export class CreatefreportsComponent implements OnInit {

  images:any;
  productImage=[];
  imageData:any;
  userId: any;


   constructor(private _snackBar: MatSnackBar, private createfreportsService: CreatefreportsService,
    private http: HttpClient,
    private router: Router, ) { }
    

  form = new FormGroup({
    UserID: new FormControl(''),
    departmentName: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    incomeSection: new FormControl('', Validators.required),
    incomeDate: new FormControl('', Validators.required),
    totalIncome: new FormControl('', Validators.required),
    expenditureSection: new FormControl('', Validators.required),
    expenditureDate: new FormControl('', Validators.required),
    totalExpenditure: new FormControl('', Validators.required),
   
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
    formData.append('departmentName', this.form.value.departmentName|| '');
    formData.append('period', this.form.value.period || '');
    formData.append('incomeSection', this.form.value.incomeSection || '');
    formData.append('incomeDate', this.form.value.incomeDate || '');
    formData.append('totalIncome', this.form.value.totalIncome || '');
    formData.append('expenditureSection', this.form.value.expenditureSection || '');
    formData.append('expenditureDate', this.form.value.expenditureDate || '');
    formData.append('totalExpenditure', this.form.value.totalExpenditure || '');
    
   // formData.append('commentbox', this.form.value.location || '');
    formData.append('productImage', this.images);
    

    this.http.post<any>('http://localhost:3000/financialreport/create', formData).subscribe((d) => {
      console.log(d);

      this.form.reset();

      this._snackBar.open('Uploaded Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit'
      })

      this.router.navigateByUrl(`/viewfreports/${d._id}`);
    });
  }

 
}