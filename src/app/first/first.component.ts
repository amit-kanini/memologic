import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMemo } from '../Models/IMemo';
import { MemoserviceService } from '../Services/memoservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router: Router,private obj: MemoserviceService) { }
  websiteList: any = ["accountingstandard1","accountingstandard2","accountingstandard3"]
  websiteList1: any = ["Consumer","Energy", "Resources and Industrial","Financial Services","Life Sciences and Health" ,"Care", "TMT","Others","Unknown"]
  memoType:string='';
  industryType:string='';

  form = new FormGroup({  
    website: new FormControl('', Validators.required) ,
    website1: new FormControl('', Validators.required) 
  });  

 

  get f(){  
    return this.form.controls;  
  }  

  submit(){  
    this.memoType=this.form.value.website
    this.industryType=this.form.value.website1
    console.log(this.memoType,"memo");  
    console.log(this.industryType,"industry");
    this.getQuestions_1(this.memoType);
  }  
  
  memo:IMemo={
    ans: [],
    question:"",
  }
  ngOnInit(): void {
    //this.getQuestions_1();
    
  }

  getQuestions_1(memoType:string):void{
    
    this.obj.getQuestions(memoType).subscribe(data=>
      {
        this.memo=data;
        console.log(this.memo);
        
        localStorage.setItem("memoType", this.memoType);
        localStorage.setItem("data", JSON.stringify(this.memo));
        this.router.navigate(['/memo']);
      })
  }

}
