import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedPageRoutingModule } from './protected-page-routing.module';
import { ProtectedPageComponent } from './protected-page.component';


@NgModule({
  declarations: [
    ProtectedPageComponent
  ],
  imports: [
    CommonModule,
    ProtectedPageRoutingModule
  ]
})
export class ProtectedPageModule { }
