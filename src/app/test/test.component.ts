import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { of } from 'rxjs/internal/observable/of';

import { IMemo } from '../Models/IMemo';
import { MemoserviceService } from '../Services/memoservice.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  memo:IMemo={
    ans: [],
    question:"",
  }
  // element:any={
  //   prevAns:"",
  //   prevQuestion:""
  // }
  y:number=20;
  next:boolean=true;
  previous:string='back';
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
  score:any=10;
  dataFinal:any=[];
  constructor(private formBuilder: FormBuilder ,private router: Router,private obj: MemoserviceService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });
    // of(this.getOrders()).subscribe(orders =>{
    //   this.orders = orders;
    //   //this.form.controls.orders.patchValue(this.orders[0].id);
    // });
  }
  getOrders() {
    return [
      //this.orders= this.Improve(this.orders)
     // this.orders
    ];
  }


  async submit() {
   this.question= this.question.replace('?','')
   let option = this.form.controls['orders'].value;
   //console.log(option,"option")
   //let index= this.memo.ans.findIndex(x=>x===option) ;
   let index= this.dataFinal.findIndex((x: any)=>x===option) ;
   //console.log(index,"index")
   if(this.text.length<2){
    this.text.push(this.question)
    let tempans=this.memo.ans[index]
    console.log(tempans,"tempans if submit")
    this.text.push(tempans)
    //console.log(this.text.length,"text if submit")
    this.next=false;
   }
   else{
    this.next=true;
   }
   //console.log(option,"option")
  await this.getNext(this.question,index+1)
   let tempans=this.memo.ans[index]
   console.log(tempans,"tempasns memeomeo")
  //if(this.text.length>2){
    if(this.next){
    //console.log(tempans)
    this.text.push(this.question)
    this.text.push(tempans)
    console.log(this.text,"submit")
   }
   this.disable=true;
  }

   Improve(orders:string[]){
     var array=[];
    for (var item in orders){
      //console.log(this.memo.ans[item],"itemssss")
      //this.memo.ans[item]=this.memo.ans[item].substring(2)

      var myarray =this.memo.ans[item].split("-- ")
      myarray[1]=myarray[1]+" %"
      
      array.push(myarray)
      //console.log(myarray,"item")
    }
    //console.log(array)
    return array
  }
  async Previous(){
    if(this.text.length <=2){
      //console.log(this.memoType,"memotype in second page")
      this.prevAns=this.text.pop()
      this.prevQuestion=this.text.pop()
      await this.getQuestions_1(this.memoType);
      //console.log(this.text.length,"if previous ")
      this.previous="ok";
    }
  //  // else if(this.text.length ==2){
  //    else if(this.previous=="back"){
  //     this.prevAns=this.text.pop()
  //     this.prevQuestion=this.text.pop()
  //     console.log(this.text.length,"text else previous")
  //    // console.log(this.prevQuestion,"previous question")
  //    // console.log(this.prevAns,"")
  //     var id=Number(this.prevAns[0])
  //     await this.getNexttoPre(this.prevQuestion,id)
  //   }
    else{
      this.text.pop()
      this.text.pop();
      this.prevAns=this.text.pop()
      this.prevQuestion=this.text.pop()
      if(this.text.length==2){
        this.previous="back"
      }
      //console.log(this.text.length,"text else previous")
     // console.log(this.prevQuestion,"previous question")
     // console.log(this.prevAns,"")
      var id=Number(this.prevAns[0])
     await this.getNexttoPre(this.prevQuestion,id)
     this.text.push(this.question)
     let tempans=this.memo.ans[id]
     //console.log(tempans,"tempans in prevoius push")
     this.text.push(tempans)
    }

  }
  ngOnInit(): void {

     this.memo = JSON.parse(localStorage.getItem("data")|| '{}');
    //  for (var item in this.memo.ans){
    //    //console.log(this.memo.ans[item],"itemssss")
    //    var myarray =this.memo.ans[item].split("-- ")
    //    this.data.push(myarray)
    //    console.log(myarray,"item")
    //  }
    this.orders=this.memo.ans;
    this.dataFinal=this.Improve(this.memo?.ans)
    // console.log(this.dataFinal,"data")
    //  
    // console.log(this.orders)
     this.question=this.memo?.question
     //this.text.push(this.question)
     //this.text.push(this.memo.ans.toString())
     this.memoType=localStorage.getItem("memoType")
     //console.log(this.memoType,"memo type in ngonit")

     
  }
   getQuestions_1(memoType:string):void{
    this.obj.getQuestions(memoType).subscribe(data=>
      {
        this.memo=data;
        this.dataFinal=this.Improve(this.memo?.ans)
        this.orders=this.memo?.ans
        this.question=this.memo?.question
        this.disable=false;
      })
  }
  getNexttoPre(question:string,id :number):void{
    this.obj.getMore(question,id,this.memoType).subscribe(data=>
      {
        this.memo=data;
        if(this.memo?.question!="END")
        {
         // console.log("hiiiiii")
         this.dataFinal=this.Improve(this.memo?.ans)
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
    this.obj.getMore(question,id,this.memoType).subscribe(data=>
      {
        id=id-1;
        this.memo=data;
        if(this.memo?.question!="END")
        {this.dataFinal=this.Improve(this.memo?.ans)
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


