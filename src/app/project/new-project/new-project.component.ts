import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<NewProjectComponent>, private oc: OverlayContainer) { }

  ngOnInit() {
    console.log(this.data.dark);
    this.oc.getContainerElement().className = this.data.dark ? 'my-app-dark-theme' : null;
  }
  onClick() {
    this.dialogRef.close('I receive your data');
  }
}
