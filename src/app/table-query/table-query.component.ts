import { QueryService } from './../query.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogQueryComponent } from '../dialog-query/dialog-query.component';
import { ExecutionPlanComponent } from '../execution-plan/execution-plan.component';
import { RaportDialogComponent } from '../raport-dialog/raport-dialog.component';
export interface UserData {
  query: string;
  querySub:string
}
export interface Data {
  query: string;
}


@Component({
  selector: 'app-table-query',
  templateUrl: './table-query.component.html',
  styleUrls: ['./table-query.component.scss']
})

export class TableQueryComponent implements AfterViewInit {
  displayedColumns: string[] = ['Query', 'Execution Plan','Report', 'Optimize'];
  dataSource: MatTableDataSource<UserData>;
  model:Data={
    query: '',
  }
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  Ptable:any=false
  constructor(public dialog: MatDialog,private queryService:QueryService) {
    console.log(this.queryService.listQuery.length)
    const users = Array.from({length: this.queryService.listQuery.length}, (_, k) => createNewUser(this.queryService.listQuery[k]));
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '85vh';
    dialogConfig.width = '40vw';
    let dialogRef=this.dialog.open(DialogQueryComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(() => { 
      const users = Array.from({length: this.queryService.listQuery.length}, (_, k) => createNewUser(this.queryService.listQuery[k]));
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } );
  }
  getPlan(query:any){
    var formData:any=new FormData();
    formData.append("query",query);
this.queryService.getPlan(formData).subscribe(res=>{
  console.log(res);
    const dialogConfig1 = new MatDialogConfig();

    dialogConfig1.width = '75vw';
    // if( this.Ptable==false){
    //   let tableplane=res

    // }
    dialogConfig1.data={
      plan: res
    }
  let dialogRef=this.dialog.open(ExecutionPlanComponent, dialogConfig1);
  dialogRef.afterClosed().subscribe(() => { 
    const users = Array.from({length: this.queryService.listQuery.length}, (_, k) => createNewUser(this.queryService.listQuery[k]));
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } );

 });
  }
  optimize(query:any){
    // console.log("jj")
    var formData:any=new FormData();
    formData.append("query",query);
this.queryService.optimize(formData).subscribe(res=>{
  console.log(res);
    const dialogConfig1 = new MatDialogConfig();

    dialogConfig1.width = '75vw';
    dialogConfig1.data={
      plan: res
    }
  let dialogRef=this.dialog.open(ExecutionPlanComponent, dialogConfig1);
  dialogRef.afterClosed().subscribe(() => { 
    const users = Array.from({length: this.queryService.listQuery.length}, (_, k) => createNewUser(this.queryService.listQuery[k]));
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } );

 });
  }
  report(query:any){
    this.Ptable=true
    // this.queryService.optimize(query)
    var formData:any=new FormData();
    formData.append("query",query);
this.queryService.Raport(formData).subscribe(res=>{
  console.log(res);
    const dialogConfig1 = new MatDialogConfig();

    dialogConfig1.width = '75vw';
    
    dialogConfig1.data={
      plan: res
    }
  let dialogRef=this.dialog.open(RaportDialogComponent, dialogConfig1);
  dialogRef.afterClosed().subscribe(() => { 
    const users = Array.from({length: this.queryService.listQuery.length}, (_, k) => createNewUser(this.queryService.listQuery[k]));
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } );

 });
  
  }
}

/** Builds and returns a new User. */
function createNewUser(query1: string): UserData {
  

  return {
    query: query1,
    querySub:query1.substring(0,20)
  };
}
