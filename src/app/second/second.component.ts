import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { of } from 'rxjs/internal/observable/of';

import { IMemo } from '../Models/IMemo';
import { MemoserviceService } from '../Services/memoservice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  memo:IMemo={
    ans: [],
    question:"",
  }
  // element:any={
  //   prevAns:"",
  //   prevQuestion:""
  // }
  y:number=20;
  text:string[]=[];
  doc=new jsPDF();
  flag:boolean=false
  question:any="";
  form: FormGroup;
  orders:any = [];
  index:number|null=0;
  prevQuestion:any="";
  prevAns:any='';
  disable:boolean=false;
  memoType:any='';
  constructor(private formBuilder: FormBuilder ,private router: Router,private obj: MemoserviceService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });
    of(this.getOrders()).subscribe(orders =>{
      this.orders = orders;
      //this.form.controls.orders.patchValue(this.orders[0].id);
    });
  }
  getOrders() {
    return [
      this.orders
    ];
  }
  async submit() {
   this.question= this.question.replace('?','')
   let option = this.form.controls['orders'].value;
   let index= this.memo.ans.findIndex(x=>x===option) ;
   if(this.text.length<=2){
    this.text.push(this.question)
    let tempans=this.memo.ans[index]
    this.text.push(tempans)
    console.log(this.text,"text if submit")
   }
   //console.log(option,"option")
  await this.getNext(this.question,index+1)
   let tempans=this.memo.ans[index]
   if(this.text.length>2){
    console.log(tempans)
    this.text.push(this.question)
    this.text.push(tempans)
    console.log(this.text,"submit")
   }

   this.disable=true;

  }

  async Previous(){
    if(this.text.length <=2){
      //console.log(this.memoType,"memotype in second page")
     await this.getQuestions_1(this.memoType);
      console.log(this.text,"if previous ")
    }
    else{
      this.text.pop()
      this.text.pop();
      this.prevAns=this.text.pop()
      this.prevQuestion=this.text.pop()
      console.log(this.text,"text else previous")
     // console.log(this.prevQuestion,"previous question")
     // console.log(this.prevAns,"")
      var id=Number(this.prevAns[0])
     await this.getNexttoPre(this.prevQuestion,id)
    }

  }
  ngOnInit(): void {

     this.memo = JSON.parse(localStorage.getItem("data")|| '{}');
     this.orders=this.memo?.ans
     this.question=this.memo?.question
     //this.text.push(this.question)
     //this.text.push(this.memo.ans.toString())
     this.memoType=localStorage.getItem("memoType")
     console.log(this.memoType,"memo type in ngonit")

     
  }
   getQuestions_1(memoType:string):void{
    
    this.obj.getQuestions(memoType).subscribe(data=>
      {
        this.memo=data;
        this.orders=this.memo?.ans
        this.question=this.memo?.question
        this.disable=false;
        //console.log(this.memo);
      
      })
  }
  getNexttoPre(question:string,id :number):void{
    this.obj.getMore(question,id).subscribe(data=>
      {
        this.memo=data;
        if(this.memo?.question!="END")
        {
         // console.log("hiiiiii")
         this.orders=this.memo?.ans
         this.question=this.memo?.question
       }
        //  else{
        //    this.flag=true;
        //    localStorage.setItem("memo-data", JSON.stringify(this.text));
        //    this.router.navigate(['/download']);
        //  }
      })
      //console.log(this.memo,"getnext prev memo")

  }

  getNext(question:string,id :number):void{
    this.obj.getMore(question,id).subscribe(data=>
      {
        id=id-1;
        this.memo=data;
        if(this.memo?.question!="END")
        {
         this.orders=this.memo?.ans
         this.question=this.memo?.question
       }
         else{
           this.flag=true;
           localStorage.setItem("memo-data", JSON.stringify(this.text));
           this.router.navigate(['/download']);
         }
      })
  }
}
