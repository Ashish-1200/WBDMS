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
  form!: FormGroup;
  message: boolean = false;
  FinancialData: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdatefreportService,
    private viewservice: ViewfreportService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
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

    this.viewservice.viewfreport(this.activatedroute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);

      this.FinancialData = result;

      this.form.patchValue({
        departmentName: result['departmentName'],
        period: result['period'],
        incomeSection: result['incomeSection'],
        incomeDate: result['incomeDate'],
        totalIncome: result['totalIncome'],
        expenditureSection: result['expenditureSection'],
        expenditureDate: result['expenditureDate'],
        totalExpenditure: result['totalExpenditure'],
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
