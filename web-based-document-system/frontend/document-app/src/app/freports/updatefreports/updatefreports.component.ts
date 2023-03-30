import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewfreportService } from '../viewfreports/viewfreports.service'; 
import { UpdatefreportService } from './updatefreports.service';

@Component({
  selector: 'app-updatefreports',
  templateUrl: './updatefreports.component.html',
  styleUrls: ['./updatefreports.component.css']
})
export class UpdatefreportsComponent implements OnInit {

  form!: FormGroup;
  message = false;
  FRdata: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdatefreportService,
    private viewservice: ViewfreportService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.viewservice.viewfreport(id).subscribe((result: any) => {
      console.log(result);
      this.FRdata = result;
      this.initForm(result);
    });
  }

  private initForm(data: any): void {
    this.form = new FormGroup({
      departmentName: new FormControl(data.departmentName, Validators.required),
      period: new FormControl(data.period, Validators.required),
      incomeSection: new FormControl(data.incomeSection, Validators.required),
      incomeDate: new FormControl(data.incomeDate, Validators.required),
      totalIncome: new FormControl(data.totalIncome, Validators.required),
      expenditureSection: new FormControl(data.expenditureSection, Validators.required),
      expenditureDate: new FormControl(data.expenditureDate, Validators.required),
      totalExpenditure: new FormControl(data.totalExpenditure, Validators.required),
      commentbox: new FormControl(data.commentbox, Validators.required),
    });
  }

  updateData(): void {
    const updatedData = this.form.value;
    updatedData.version = this.FRdata.version + 1;
    console.log(updatedData);
    this.updateservice.updateform(this.FRdata._id, updatedData).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Updated Successfully', '', {
        verticalPosition: 'top',
        panelClass: 'edit'
      });
    });
  }

 

}
