import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobOfferComponent } from './component/job-offer/job-offer.component';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './component/job-list/job-list.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { NewOfferComponent } from './component/new-offer/new-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    JobOfferComponent,
    JobListComponent,
    LoginComponent,
    RegisterComponent,
    NewOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
