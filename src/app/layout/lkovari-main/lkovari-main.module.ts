import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkovariMainComponent } from './lkovari-main.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material-module';
import { LkovariMainRoutingModule } from './lkovari-main-routing.module';
import { AngularPageModule } from './angular-page/angular-page.module';

@NgModule({
  declarations: [LkovariMainComponent],
  exports: [LkovariMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    LkovariMainRoutingModule,
    AngularPageModule
  ]
})
export class LkovariMainModule { }
