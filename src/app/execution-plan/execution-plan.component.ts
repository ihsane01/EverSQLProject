import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit,ViewChild, ElementRef , Inject } from '@angular/core';
export interface PeriodicElement {
  id: string;
  operation: string;
  name: string;
  rows: string;
  bytes:string;
  cost:string;
  time:string
}
let ELEMENT_DATA2: PeriodicElement[] = [
  {id: '1', operation: 'Hydrogen', name: '1.0079', rows: 'H', bytes: 'H', cost: 'H', time: 'H'},
];
let ELEMENT_DATA: PeriodicElement[] = [
];
@Component({
  selector: 'app-execution-plan',
  templateUrl: './execution-plan.component.html',
  styleUrls: ['./execution-plan.component.scss']
})
export class ExecutionPlanComponent implements OnInit {
   list:PeriodicElement={
    id: '',
    operation: '',
    name: '',
    rows: '',
    bytes: '',
    cost: '',
    time: ''
  }
  displayedColumns: string[] = ['ID', 'OPERATION', 'NAME', 'ROWS','BYTES','COST (%CPU)','TIME'];
  dataSource = ELEMENT_DATA;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // ELEMENT_DATA=[]
    this.convertData(data.plan)
    

   }
   

   convertData(plan:any){

    for (const row of plan) {
      let list:PeriodicElement={
        id: '',
        operation: '',
        name: '',
        rows: '',
        bytes: '',
        cost: '',
        time: ''
      }
      list.id=row[0]
      list.operation=row[1]
      list.name=row[2]
      list.rows=row[3]
      list.bytes=row[4]
      list.cost=row[5]
      list.time=row[6]
      console.log(list)
      ELEMENT_DATA.push(list)
    }
    console.log(ELEMENT_DATA)
    console.log('ELEMENT_DATA')
   }

  ngOnInit(): void {
    ELEMENT_DATA=[]
  }

}