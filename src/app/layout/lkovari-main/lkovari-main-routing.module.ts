import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LkovariMainComponent } from './lkovari-main.component';
import { AngularPage1Component } from './angular-page/angular-page1/angular-page1.component';

const routes: Routes = [
  { path: '', component: LkovariMainComponent,
    children: [
      // {path: 'welcome-page', loadChildren: './welcome-page/welcome-page.module#WelcomePageModule'},
      { path: 'angular-page1', component: AngularPage1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LkovariMainRoutingModule { }
