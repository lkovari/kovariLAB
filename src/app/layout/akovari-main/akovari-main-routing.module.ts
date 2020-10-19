import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AkovariMainComponent } from './akovari-main.component';
import { AboutMeComponent } from './akovari-about-me/about-me.component';
import { AkovariHomeComponent } from './akovari-home/akovari-home.component';
import { AkovariCertComponent } from './akovari-certifications/akovari-cert.component';
import { AkovariVideoComponent } from './akovari-video/akovari-video.component';

const routes: Routes = [
  { path: '', component: AkovariMainComponent,
    children: [
      { path: '', component: AkovariHomeComponent },
      { path: 'akovari-home', component: AkovariHomeComponent },
      { path: 'akovari-about-me', component: AboutMeComponent },
      { path: 'akovari-certifications', component: AkovariCertComponent },
      { path: 'akovari-video', component: AkovariVideoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkovariMainRoutingModule { }
