import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface PeriodicElement {
  id: string;
  operation: string;
  name: string;
  rows: string;
  bytes:string;
  cost:string;
  time:string
}
let ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-raport-dialog',
  templateUrl: './raport-dialog.component.html',
  styleUrls: ['./raport-dialog.component.scss']
})


export class RaportDialogComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  i : any
  var:any
  requetoptimize:any

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.convertData(data.plan)
    

  }

  convertData(plan:any){
    console.log(plan)
    this.i=1
    for (const row of plan) {
      
      console.log(row)
      console.log(plan.length)

    if(this.i!=plan.length)
        { console.log(this.i)
      ELEMENT_DATA.push(row)
    }
    else{
      this.requetoptimize=row
    }
    this.i+=1
     

    }
   if(this.requetoptimize==" ")
   this.var=false
   else
   this.var=true
    console.log(ELEMENT_DATA)
    console.log('ELEMENT_DATA')
   }

  ngOnInit(): void {
    ELEMENT_DATA=[]

  }

}
