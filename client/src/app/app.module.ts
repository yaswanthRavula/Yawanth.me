import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { WorkComponent } from './componenets/work/work.component';
import { AboutComponent } from './componenets/about/about.component';
import { MessageComponent } from './componenets/message/message.component';
import { SuggestComponent } from './componenets/suggest/suggest.component';
import { TechComponent } from './componenets/tech/tech.component';
import { FooterComponent } from './componenets/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    MessageComponent,
    SuggestComponent,
    TechComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
