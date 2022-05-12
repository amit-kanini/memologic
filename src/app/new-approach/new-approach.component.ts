import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMemo } from '../Models/IMemo';
import { IStandards } from '../Models/IStandarda';
import { IData } from '../Models/new_data';
import { MemoserviceService } from '../Services/memoservice.service';

@Component({
  selector: 'app-new-approach',
  templateUrl: './new-approach.component.html',
  styleUrls: ['./new-approach.component.css']
})
export class NewApproachComponent implements OnInit {
  constructor(private router: Router,private obj: MemoserviceService) { }
  websiteList: any = ["accountingstandard1","accountingstandard2","accountingstandard3"]
  
  memoType:string='';
  industryType:string='';
  accStandards:IStandards={
  accountingstandard:"",
  }

  form = new FormGroup({  
    website: new FormControl('', Validators.required) ,
    
  });  


  get f(){  
    return this.form.controls;  
  }  

  submit(){  
    this.memoType=this.form.value.website
    // this.industryType=this.form.value.website1
     console.log(this.memoType,"memo");  
    // console.log(this.industryType,"industry");
    //this.accStandards.accountingstandard=this.memoType
    // this.NewAPi(this.accStandards);
     this.NewAPi(this.memoType);
     

  }  
  
  memo:IData={
    Memo1:[],
    Memo2:[],
    Memo3:[]
  }

  

  ngOnInit(): void {
    //this.getQuestions_1();
    
  }

  NewAPi(memoType:string):void{
    let parameter=""
    if(memoType=="accountingstandard1"){
      parameter="secondapproch/v2/firstaccounting/1"
    }

    if(memoType=="accountingstandard2"){
      parameter="secondapproch2/v2/2accountingsatanard/2"
    }
    if(memoType=="accountingstandard3"){
      parameter="secondapproch3/v2/thirdaccounting/3"
    }
    this.obj.NewAppraochAPi(parameter).subscribe(data=>
      {
        this.memo=data;
        //console.log(this.memo,"data");
        // localStorage.setItem("memoType", this.memoType);
        localStorage.setItem("data", JSON.stringify(this.memo));
        this.router.navigate(['/memos']);
      })
  }

}
