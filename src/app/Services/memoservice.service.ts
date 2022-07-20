import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { IMemo } from '../Models/IMemo';
import { Observable } from 'rxjs/internal/Observable';
import { IStandards } from '../Models/IStandarda';
import { IData } from '../Models/new_data';
@Injectable({
  providedIn: 'root'
})
export class MemoserviceService {

 // private url="https://memologixapi.azurewebsites.net/api/memo/initial_node/v1/"
 // private url1="https://memologixapi.azurewebsites.net/api/memo/subs_node/v1/"
  private url="http://localhost:5000/api/memo/initial_node/v1";
  private url1="http://localhost:5000/api/memo/subs_node/v1/";
  private newUrl2="http://127.0.0.1:5000/api/recomdation_of_memos_withoutdelta/v2";
  private newUrl="http://localhost:5000/api/recomdation_of_memos_withdelta/v2";
  
  constructor(private http: HttpClient) { }

  // getQuestions(memeoType:string): Observable<IMemo> {
  //   return this.http.get<IMemo>(this.url+memeoType,
  //     { headers:new HttpHeaders({
  //          'Content-Type':'application/json;charset=UTF-8',
  //           'Access-Control-Allow-Origin':'*', 
  //           'Access-Control-Allow-Method':'*' })
  //   })
  // }


   

  getQuestions(memeoType:any): Observable<any> {
    var formData: any = new FormData();
   // formData.append("accountingstandard", memeoType);
    var data={"accountingstandard":memeoType}
    return this.http.post<any>(this.url,data,
      { headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Method':'*' })
    })
  }

// getMore(question:any,id:number): Observable<IMemo> {

//   return this.http.get<IMemo>(this.url1+question+" "+id ,
//     { headers:new HttpHeaders({
//          'Content-Type':'application/json;charset=UTF-8',
//           'Access-Control-Allow-Origin':'*', 
//           'Access-Control-Allow-Method':'*' })
//   })            
// }
getMore(question:any,id:number,memoType:string): Observable<IMemo> {
  console.log(question,id,memoType);
  var questionq=question+"? "+id
  var data={"accountingstandard":memoType ,"question":questionq}
  return this.http.post<IMemo>(this.url1,data ,
    { headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*', 
          'Access-Control-Allow-Method':'*' })
  })            
}


NewAppraochAPi(ord:string):Observable<IData>
{
  //console.log(this.newUrl+ord ,"newurl")
  var data={"accountingstandard":ord}
  return this.http.post<IData>(this.newUrl,data,
    { headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*', 
          'Access-Control-Allow-Method':'*' })
  }) 
}


NewAppraochAPi1(ord:string):Observable<IData>
{
  //console.log(this.newUrl+ord ,"newurl")
  var data={"accountingstandard":ord}
  return this.http.post<IData>(this.newUrl2,data,
    { headers:new HttpHeaders({
         'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*', 
          'Access-Control-Allow-Method':'*' })
  }) 
}

}
