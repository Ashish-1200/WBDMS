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

  constructor(private activatedroute:ActivatedRoute, private updateequipservice:UpdateformequipService, private viewservice:ViewformequipService , private _snackBar: MatSnackBar) { }

  form = new FormGroup({
   
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
  message:boolean = false;

  equipData: any;

  ngOnInit(): void {

    this.viewservice.viewequipForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.equipData = result;

      this.form = new FormGroup({
        DepartmentName: new FormControl(result [' DepartmentName'],Validators.required),
        Project: new FormControl(result['Project'],Validators.required),
        DateOfProject:new FormControl(result['DateOfProject'],Validators.required),
        EquipmentDescription:new FormControl(result[' EquipmentDescription'],Validators.required),
        SerialNo: new FormControl(result['SerialNo']),
        DateAcquired: new FormControl(result['DateAcquired'],Validators.required),
        CostOfEquipment:new FormControl(result['CostOfEquipment'],Validators.required),
        description:new FormControl(result['description'],Validators.required),
        commentbox:new FormControl(result['commentbox'],Validators.required),
        //lastEditedBy: new FormControl('current user', Validators.required),
        //versionNumber: new FormControl(1),
        
       
      });

      

    });
  }





  UpdateData() {

    const updatedData = this.form.value;
    updatedData.version = this.equipData.version + 1;

    console.log(this.form.value);
    this.updateequipservice.updateformequip(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Updated Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })

    })



  
  }
  removeMessage() {

  }

}
