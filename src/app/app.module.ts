import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThirdComponent } from './third/third.component';
import { PurposeComponent } from './purpose/purpose.component';
import { BackgroundComponent } from './background/background.component';
import { TestComponent } from './test/test.component';
import { TrimPipe } from './trim.pipe';
import { NewApproachComponent } from './new-approach/new-approach.component';
import { MemosPageComponent } from './memos-page/memos-page.component';
// import {  MatSelectModule,  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PurposeComponent,
    BackgroundComponent,
    TestComponent,
    TrimPipe,
    NewApproachComponent,
    MemosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    // MaterialModule,
    // MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
