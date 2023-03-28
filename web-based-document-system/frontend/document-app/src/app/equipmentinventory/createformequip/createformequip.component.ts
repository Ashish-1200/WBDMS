import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {EquipmentServiceCF } from './createformequip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createformequip',
  templateUrl: './createformequip.component.html',
  styleUrls: ['./createformequip.component.css']
})
export class CreateformequipComponent implements OnInit {
  images:any;
  productImage=[];
  imageData:any;
  userId: any;

   constructor(private _snackBar: MatSnackBar, private EquipmentServiceCF: EquipmentServiceCF,
    private http: HttpClient,
    private router: Router, ) { }
    

  form = new FormGroup({
    UserID: new FormControl(''),
    DepartmentName: new FormControl('', Validators.required),
    Project: new FormControl('', Validators.required),
    DateOfProject: new FormControl('', Validators.required),
    EquipmentDescription: new FormControl('', Validators.required),
    SerialNo: new FormControl('', Validators.required),
    DateAcquired: new FormControl('', Validators.required),
    CostOfEquipment: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
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
    formData.append('DepartmentName', this.form.value.DepartmentName|| '');
    formData.append('Project', this.form.value.Project|| '');
    formData.append('DateOfProject', this.form.value.DateOfProject || '');
    formData.append('EquipmentDescription', this.form.value.EquipmentDescription || '');
    formData.append('SerialNo', this.form.value.SerialNo || '');
    formData.append('DateAcquired', this.form.value.DateAcquired || '');
    formData.append('CostOfEquipment', this.form.value.CostOfEquipment || '');
    
    formData.append('description', this.form.value.description || '');
   
    formData.append('productImage', this.images);
    

    this.http.post<any>('http://localhost:3000/equipmentinventory/create', formData).subscribe((d) => {
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

