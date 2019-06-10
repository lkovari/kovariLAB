import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav/sidenav-list.component';
import { MaterialModule } from '../material/material-module';
import { LayoutContentComponent } from './components/layoutcontent/layout-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidenavListComponent, LayoutContentComponent],
  exports: [HeaderComponent, SidenavListComponent, LayoutContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
