import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material-module';
import { BkovariMainComponent } from './bkovari-main.component';
import { BkovariMainRoutingModule } from './bkovari-main-routing.module';
import { AboutMeComponent } from './bkovari-about-me/about-me.component';
import { PublicationsComponent } from './bkovari-publications/publications.component';
import { BkovariHomeComponent } from './bkovari-home/bkovari-home.component';
import { TDKComponent } from './bkovari-tdk/tdk.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BkovariMainComponent, AboutMeComponent, PublicationsComponent, BkovariHomeComponent, TDKComponent],
  exports: [BkovariMainComponent,  AboutMeComponent, PublicationsComponent, BkovariHomeComponent, TDKComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    BkovariMainRoutingModule
  ]
})
export class BkovariMainModule { }
