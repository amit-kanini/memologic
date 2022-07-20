import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { IMemo } from '../Models/IMemo';
import { IData} from '../Models/new_data';

@Component({
  selector: 'app-memos-page',
  templateUrl: './memos-page.component.html',
  styleUrls: ['./memos-page.component.css']
})
export class MemosPageComponent implements OnInit {


  constructor() { }
  public show: boolean = false;
  public show1: boolean = false;
  public show2: boolean = false;
memo_1:any=[];
memo_2:any=[];
memo_3:any=[];
dataFinal:any=[];
  question:string="";
  ans:string="";
  score:string="";
  y:number=20;
  x:number=20;
  z:number=20;
  
  memo:IData={
    Memo1:[],
    Memo2:[],
    Memo3:[]
  }
  memo1(){
    this.show=true;
    this.show1=false;
    this.show2=false
  }
  memo2(){
    this.show=false;
    this.show1=true;
    this.show2=false
  }
  memo3(){
    this.show=false;
    this.show1=false;
    this.show2=true
  }

  Improve(orders:string[]){
    var array=[];
   for (var item in orders){
    var new_data1:string[]|undefined=[]
    var myarray=orders[item].split("--")
    array.push(myarray)
   }

   return array
 }
  ngOnInit(): void {
    this.memo = JSON.parse(localStorage.getItem("data")|| '{}');
    //console.log(this.memo,"data onmemo page")
    console.log(this.memo ,"data11")
    this.memo_1=this.Improve(this.memo.Memo1)
    this.memo_2=this.Improve(this.memo.Memo2)
    this.memo_3=this.Improve(this.memo.Memo3)
    
    console.log(this.memo_1,"final")
  }
  downloadMemo1(){
    const doc=new jsPDF();
    doc.text('Analysis',10,this.y);
    this.y=this.y+20
    doc.text('Memo1',10,this.y);
    this.y=this.y+20
    for (var val of this.memo_1) {
      doc.text("Q)"+val[0],10,this.y);
      this.y=this.y+20
      doc.text("Ans--"+val[1],10,this.y);
      this.y=this.y+20
     // console.log(val); // prints values: 10, 20, 30, 40
    }
    console.log("inside dowload memo")
    doc.save("Memo.pdf");
  }
  downloadMemo2(){
    const doc=new jsPDF();
    doc.text('Analysis',10,this.x);
    this.x=this.x+20
    doc.text('Memo2',10,this.x);
    this.x=this.x+20
    for (var val of this.memo_2) {
      doc.text("Q)"+val[0],10,this.x);
      this.x=this.x+20
      doc.text("Ans--"+val[1],10,this.x);
      this.x=this.x+20
     // console.log(val); // prints values: 10, 20, 30, 40
    }
    //doc.text('',10,this.y);
    console.log("inside dowload memo")
    doc.save("Memo.pdf");
  }
  downloadMemo3(){
    const doc=new jsPDF();
    doc.text('Analysis',10,this.z);
    this.z=this.z+20
    doc.text('Memo3',10,this.z);
    this.z=this.z+20
    for (var val of this.memo_3) {
      doc.text("Q)"+val[0],10,this.z);
      this.z=this.z+20
      doc.text("Ans--"+val[1],10,this.z);
      this.z=this.z+20
     // console.log(val); // prints values: 10, 20, 30, 40
    }
    //doc.text('',10,this.y);
    console.log("inside dowload memo")
    doc.save("Memo.pdf");
  }

}
