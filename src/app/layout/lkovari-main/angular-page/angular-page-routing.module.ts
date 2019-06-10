import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularPageTitleComponent } from './angular-page-title.component';
import { AngularPage1Component } from './angular-page1/angular-page1.component';

const routes: Routes = [
  { path: '', component: AngularPageTitleComponent },
  { path: 'abgular-page1', component: AngularPage1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPageRoutingModule { }