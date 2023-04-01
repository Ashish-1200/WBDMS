import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewIRService } from '../viewinsurereports/viewireport.service';  
import { UpdateIreportService } from './updateir.service';

@Component({
  selector: 'app-updateinsurereports',
  templateUrl: './updateinsurereports.component.html',
  styleUrls: ['./updateinsurereports.component.css']
})
export class UpdateinsurereportsComponent implements OnInit {

  form!: FormGroup;
  message: boolean = false;
  Insurancedata: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdateIreportService,
    private viewservice: ViewIRService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      departmentName: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      projectDescription: new FormControl('', Validators.required),
      insuranceDate: new FormControl('', Validators.required),
      commentbox: new FormControl('', Validators.required),
    });

    const id = this.activatedroute.snapshot.params['id'];
    this.viewservice.viewIreport(id).subscribe((result: any) => {
      console.log(result);
      this.Insurancedata = result;
      this.form.patchValue({
        departmentName: result['departmentName'],
        period: result['period'],
        projectDescription: result['projectDescription'],
        insuranceDate: result['insuranceDate'],
        commentbox: result['commentbox'],
      });
    });
  }

  updateData(): void {
    const updatedData = this.form.value;
    updatedData.version = this.Insurancedata.version + 1;
    console.log(updatedData);
    this.updateservice.updateform(this.Insurancedata._id, updatedData).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Updated Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit'
      });
    });
  }
}
