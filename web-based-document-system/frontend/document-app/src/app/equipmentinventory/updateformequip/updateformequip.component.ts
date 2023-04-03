import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewformequipService } from '../viewformequip/viewformequip.service'; 
import { UpdateformequipService } from './updateformequip.service';

@Component({
  selector: 'app-updateformequip',
  templateUrl: './updateformequip.component.html',
  styleUrls: ['./updateformequip.component.css']
})
export class UpdateformequipComponent implements OnInit {
  message:boolean = false;
  form!: FormGroup;
  equipData: any;
  constructor(private activatedroute:ActivatedRoute, private updateequipservice:UpdateformequipService, private viewservice:ViewformequipService , private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

  this.form = new FormGroup({
   
    DepartmentName: new FormControl(''),
    Project: new FormControl('', Validators.required),
    DateOfProject: new FormControl('', Validators.required),
    EquipmentDescription: new FormControl('', Validators.required),
    SerialNo: new FormControl('', Validators.required),
    DateAcquired: new FormControl('', Validators.required),
    CostOfEquipment: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    commentbox: new FormControl('', Validators.required),
   

  });
  



    this.viewservice.viewequipForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.equipData = result;

      this.form.patchValue({
        DepartmentName: result [' DepartmentName'],
        Project: result['Project'],
        DateOfProject:result['DateOfProject'],
        EquipmentDescription:result[' EquipmentDescription'],
        SerialNo: result['SerialNo'],
        DateAcquired: result['DateAcquired'],
        CostOfEquipment:result['CostOfEquipment'],
        description:result['description'],
        commentbox:result['commentbox'],
        //lastEditedBy: new FormControl('current user', Validators.required),
        //versionNumber: new FormControl(1),
        
       
      });
    });
  }

UpdateData() {
  const updatedData = this.form.value;
  updatedData.version = this.equipData.version + 1;

  console.log(this.form.value);
  this.updateequipservice.updateformequip(this.activatedroute.snapshot.params['id'], this.form.value).subscribe((result) => {
    console.log(result);
    this._snackBar.open('Updated Successfully', '', {
      verticalPosition: 'top',
      panelClass: 'edit',
    });
  });
}
}
