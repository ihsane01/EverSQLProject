import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogQueryComponent } from '../dialog-query/dialog-query.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '85vh';
    dialogConfig.width = '40vw';
    this.dialog.open(DialogQueryComponent,dialogConfig);
  }

}
