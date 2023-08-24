import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { NgMatTemplatesComponent } from './ng-mat-templates/ng-mat-templates.component';
import { GotetiFormsModule } from 'goteti-forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NgMatTemplatesComponent
  ],
  imports: [
    GotetiFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule
  ],
  exports:[
    NgMatTemplatesComponent,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class NgmaterialModule { }
