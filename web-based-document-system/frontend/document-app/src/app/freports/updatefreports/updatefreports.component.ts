import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewfreportService} from '../viewfreports/viewfreports.service'; 
import { UpdatefreportService } from './updatefreports.service';

@Component({
  selector: 'app-updatefreports',
  templateUrl: './updatefreports.component.html',
  styleUrls: ['./updatefreports.component.css']
})
export class UpdatefreportsComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdatefreportService, private viewservice:ViewfreportService , private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    //versionNumber: new FormControl(1),
    //lastEditedBy: new FormControl('',Validators.required),
    
    departmentName: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    incomeSection: new FormControl('', Validators.required),
    incomeDate: new FormControl('', Validators.required),
    totalIncome: new FormControl('', Validators.required),
    expenditureSection: new FormControl('', Validators.required),
    expenditureDate: new FormControl('', Validators.required),
    totalExpenditure: new FormControl('', Validators.required),
   commentbox: new FormControl('', Validators.required),
   
   

  });
  message:boolean = false;

  incidentData: any;

  ngOnInit(): void {

    this.viewservice.viewfreport(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.incidentData = result;

      this.form = new FormGroup({
        

        departmentName: new FormControl(result [' departmentName'],Validators.required),
        period: new FormControl(result['period'],Validators.required),
        incomeSection:new FormControl(result['incomeSection'],Validators.required),
        incomeDate:new FormControl(result['incomeDate'],Validators.required),
        totalIncome: new FormControl(result['totalIncome']),
        expenditureSection: new FormControl(result['expenditureSection'],Validators.required),
        expenditureDate:new FormControl(result['expenditureDate'],Validators.required),
        totalExpenditure:new FormControl(result['totalExpenditure'],Validators.required),
        commentbox:new FormControl(result['commentbox'],Validators.required),
        //lastEditedBy: new FormControl('current user', Validators.required),
        //versionNumber: new FormControl(1),
        
       
      });

      

    });
  }





  UpdateData() {

    const updatedData = this.form.value;
    updatedData.version = this.incidentData.version + 1;

    console.log(this.form.value);
    this.updateservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
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
