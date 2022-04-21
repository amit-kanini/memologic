import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { IMemo } from '../Models/IMemo';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class MemoserviceService {

 // private url="https://memologixapi.azurewebsites.net/api/memo/initial_node/v1/"
 // private url1="https://memologixapi.azurewebsites.net/api/memo/subs_node/v1/"
  private url="http://localhost:8000/api/memo/initial_node/v1/";
  private url1="http://localhost:8000/api/memo/subs_node/v1/"
  
  constructor(private http: HttpClient) { }

  getQuestions(memeoType:string): Observable<IMemo> {
    return this.http.get<IMemo>(this.url+memeoType,
      
      { headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Method':'*' })
    })
}

getMore(question:any,id:number): Observable<IMemo> {
  return this.http.get<IMemo>(this.url1+question+" "+id ,
    { headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*', 
          'Access-Control-Allow-Method':'*' })
  })            
}
}
