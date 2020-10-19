import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BkovariMainComponent } from './bkovari-main.component';
import { AboutMeComponent } from './bkovari-about-me/about-me.component';
import { PublicationsComponent } from './bkovari-publications/publications.component';
import { BkovariHomeComponent } from './bkovari-home/bkovari-home.component';
import { TDKComponent } from './bkovari-tdk/tdk.component';

const routes: Routes = [
  { path: '', component: BkovariMainComponent,
    children: [
      { path: '', component: BkovariHomeComponent },
      { path: 'bkovari-home', component: BkovariHomeComponent },
      { path: 'bkovari-about-me', component: AboutMeComponent },
      { path: 'bkovari-publications', component: PublicationsComponent },
      { path: 'bkovari-tdk', component: TDKComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BkovariMainRoutingModule { }
