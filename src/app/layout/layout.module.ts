import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from '../material/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent
    ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    HomeModule,
  ]
})
export class LayoutModule { }
