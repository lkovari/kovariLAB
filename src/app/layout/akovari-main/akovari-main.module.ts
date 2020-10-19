import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material-module';
import { AkovariMainComponent } from './akovari-main.component';
import { AkovariMainRoutingModule } from './akovari-main-routing.module';
import { AboutMeComponent } from './akovari-about-me/about-me.component';
import { AkovariHomeComponent } from './akovari-home/akovari-home.component';
import { AkovariCertComponent } from './akovari-certifications/akovari-cert.component';
import { AkovariVideoComponent } from './akovari-video/akovari-video.component';

@NgModule({
  declarations: [AkovariMainComponent, AboutMeComponent, AkovariHomeComponent, AkovariVideoComponent, AkovariCertComponent],
  exports: [AkovariMainComponent, AboutMeComponent, AkovariHomeComponent, AkovariVideoComponent, AkovariCertComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    AkovariMainRoutingModule
  ]
})
export class AkovariMainModule { }
