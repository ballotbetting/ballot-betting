import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from './ng-material/ngmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GotetiFormsModule, GtFormsService } from 'goteti-forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GotetiFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public gtFormService: GtFormsService){

    }
 }
