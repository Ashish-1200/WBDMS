import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { VieweventService} from '../viewevent/viewevent.service'; 
import { UpdateEventService } from './updateevent.service';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  form!: FormGroup;
  message: boolean = false;
  eventData: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private updateservice: UpdateEventService,
    private viewservice: VieweventService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      department: new FormControl('', Validators.required),
      eventName: new FormControl('', Validators.required),
      eventDes: new FormControl('', Validators.required),
      eventDate: new FormControl('', Validators.required),
      commentbox: new FormControl('', Validators.required),
    });
    this.viewservice.vieweventForm(this.activatedroute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);

      this.eventData = result;

      this.form.patchValue({
        department: result['department'],
        eventName: result['eventName'],
        eventDes: result['eventDes'],
        eventDate: result['eventDate'],
        commentbox: result['commentbox'],
      });
    });
  }

  updateData() {
    const updatedData = this.form.value;
    updatedData.version = this.eventData.version + 1;

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