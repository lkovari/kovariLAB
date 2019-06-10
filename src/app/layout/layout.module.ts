import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from '../material/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { LkovariMainModule } from './lkovari-main/lkovari-main.module';
import { BkovariMainModule } from './bkovari-main/bkovari-main.module';
import { AkovariMainModule } from './akovari-main/akovari-main.module';

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
    LkovariMainModule,
    AkovariMainModule,
    BkovariMainModule
  ]
})
export class LayoutModule { }
