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
      {path: 'lkovari-main', loadChildren: () => import('./lkovari-main/lkovari-main.module').then(m => m.LkovariMainModule) },
      {path: 'bkovari-main', loadChildren: () => import('./bkovari-main/bkovari-main.module').then(m => m.BkovariMainModule) },
      {path: 'akovari-main', loadChildren: () => import('./akovari-main/akovari-main.module').then(m => m.AkovariMainModule) }
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
