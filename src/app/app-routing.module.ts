import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { FirstComponent } from './first/first.component';
import { PurposeComponent } from './purpose/purpose.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'', component : FirstComponent},
  {path:'memo', component : SecondComponent},
  {path:'download', component : ThirdComponent},
  {path:'purpose', component : PurposeComponent},
  {path:'background', component : BackgroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
