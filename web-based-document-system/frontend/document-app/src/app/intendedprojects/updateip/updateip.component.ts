import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewIPService} from '../viewip/viewip.service'; 
import { UpdateIPService } from './updateip.service';
@Component({
  selector: 'app-updateip',
  templateUrl: './updateip.component.html',
  styleUrls: ['./updateip.component.css']
})
export class UpdateipComponent implements OnInit {

  form!: FormGroup;
  message: boolean = false;
  intendedData: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdateIPService,
    private viewservice: ViewIPService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ProjectTitle: new FormControl('', Validators.required),
      ProjectDescription: new FormControl('', Validators.required),
      ProjectBudget: new FormControl('', Validators.required),
      ProjectStartDate: new FormControl('', Validators.required),
      ProjectEndDate: new FormControl('', Validators.required),
      ProjectStatus: new FormControl('', Validators.required),
      expenditureDate: new FormControl('', Validators.required),
      totalExpenditure: new FormControl('', Validators.required),
      commentbox: new FormControl('', Validators.required),
    });
   



    this.viewservice.viewIPreport(this.activatedroute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);

      this.intendedData = result;

      this.form.patchValue({
        ProjectTitle: result['ProjectTitle'],
        ProjectDescription: result['ProjectDescription'],
        ProjectBudget: result['ProjectBudget'],
        ProjectStartDate: result['ProjectStartDate'],
        ProjectEndDate: result['ProjectEndDate'],
        ProjectStatus: result['ProjectStatus'],
        expenditureDate: result['expenditureDate'],
        totalExpenditure: result['totalExpenditure'],
        commentbox: result['commentbox'],
      });
    });
  }

  updateData() {
    const updatedData = this.form.value;
    updatedData.version = this.intendedData.version + 1;

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



