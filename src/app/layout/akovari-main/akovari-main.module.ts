import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material-module';
import { AkovariMainComponent } from './akovari-main.component';
import { AkovariMainRoutingModule } from './akovari-main-routing.module';

@NgModule({
  declarations: [AkovariMainComponent],
  exports: [AkovariMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    AkovariMainRoutingModule
  ]
})
export class AkovariMainModule { }
