import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewPolicyService} from '../viewpolicy/viewpolicy.service'; 
import { UpdatePolicyService } from './updatepolicyservice';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatepolicyComponent implements OnInit {
  form!: FormGroup;
  message: boolean = false;
  FinancialData: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdatePolicyService,
    private viewservice: ViewPolicyService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      departmentName: new FormControl('', Validators.required),
      Purpose: new FormControl('', Validators.required),
      Terms: new FormControl('', Validators.required),
      Scope: new FormControl('', Validators.required),
      Limitations: new FormControl('', Validators.required),
     
      commentbox: new FormControl('', Validators.required),
    });
    
   

    this.viewservice.viewpolicyreport(this.activatedroute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);

      this.FinancialData = result;

      this.form.patchValue({
        departmentName: result['departmentName'],
        Purpose: result['Purpose'],
        Terms: result['Terms'],
        Scope: result['Scope'],
        Limitations: result[' Limitations'],
    
        commentbox: result['commentbox'],

       
      });
    });
  }

  updateData() {
    const updatedData = this.form.value;
    updatedData.version = this.FinancialData.version + 1;

    console.log(this.form.value);
    this.updateservice.updateform(this.activatedroute.snapshot.params['id'], this.form.value).subscribe((result) => {
      console.log(result);
      this._snackBar.open('Updated Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit',
      });
    });
  }
}


