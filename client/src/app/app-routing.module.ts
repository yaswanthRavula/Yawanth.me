import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenets/about/about.component';
import { HomeComponent } from './componenets/home/home.component';
import { MessageComponent } from './componenets/message/message.component';
import { SuggestComponent } from './componenets/suggest/suggest.component';
import { TechComponent } from './componenets/tech/tech.component';
import { WorkComponent } from './componenets/work/work.component';

const routes: Routes = [
  {path:'', pathMatch:'full' ,redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'Work',component:WorkComponent},
  {path:'Tech-stack',component:TechComponent},
  {path:'Suggest',component:SuggestComponent},
  {path:'Contact-me',component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
