import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QueryService {
  listQuery:string[] = [];
  addQuery(query:string) {
    this.listQuery.push(query);
  }
  constructor(private http: HttpClient) { }

  getPlan(query:any){
    let headers = new HttpHeaders();
    console.log(query)
    return this.http.post('http://127.0.0.1:5000/selectQuery',query, { headers: headers });
  }
  optimize(query:any){
    let headers = new HttpHeaders();
    console.log(query)
    return this.http.post('http://127.0.0.1:5000/optimizeQuery',query, { headers: headers });
  }
  Raport(query:any){
    let headers = new HttpHeaders();
    console.log(query)
    return this.http.post('http://127.0.0.1:5000/raportQuery',query, { headers: headers });
  }
}
