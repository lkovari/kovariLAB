import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPage1Component } from './angular-page1/angular-page1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularPageRoutingModule } from './angular-page-routing.module';
import { MaterialModule } from 'src/app/material/material-module';
import { AngularPageTitleComponent } from './angular-page-title.component';

@NgModule({
  declarations: [AngularPageTitleComponent, AngularPage1Component],
  exports: [AngularPageTitleComponent, AngularPage1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    AngularPageRoutingModule
  ]
})
export class AngularPageModule { }
