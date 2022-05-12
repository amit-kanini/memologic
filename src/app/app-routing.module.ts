import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { FirstComponent } from './first/first.component';
import { MemosPageComponent } from './memos-page/memos-page.component';
import { NewApproachComponent } from './new-approach/new-approach.component';
import { PurposeComponent } from './purpose/purpose.component';
import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'', component : FirstComponent},
  {path:'memo', component : TestComponent},
  {path:'download', component : ThirdComponent},
  {path:'purpose', component : PurposeComponent},
  {path:'background', component : BackgroundComponent},
  {path:'newapproach', component : NewApproachComponent},
  {path:'memos', component : MemosPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
