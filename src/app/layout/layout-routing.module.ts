import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent },
      {path: 'lkovari-main', loadChildren: () => import('./lkovari-main/lkovari-main.module').then(m => m.LkovariMainModule) }
    ]
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
