import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material-module';
import { BkovariMainComponent } from './bkovari-main.component';
import { BkovariMainRoutingModule } from './bkovari-main-routing.module';

@NgModule({
  declarations: [BkovariMainComponent],
  exports: [BkovariMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    BkovariMainRoutingModule
  ]
})
export class BkovariMainModule { }
