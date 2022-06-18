import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllCatsComponent } from './all-cats/all-cats.component'
import {FormsModule} from "@angular/forms";
import { CatsPaginationComponent } from './cats-pagination/cats-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCatsComponent,
    CatsPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
