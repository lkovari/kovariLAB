import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BkovariMainComponent } from './bkovari-main.component';

const routes: Routes = [
  { path: '', component: BkovariMainComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkovariMainRoutingModule { }
