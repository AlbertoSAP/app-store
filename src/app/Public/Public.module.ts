import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './Public.component';
import { HomeComponent } from '../Public/home/home.component';
import { AppRoutingModule } from '../app-router';

@NgModule({
  declarations: [
    PublicComponent,
     HomeComponent],
  imports: [CommonModule,
    AppRoutingModule],
  exports: [PublicComponent,
     HomeComponent],
})
export class PublicModule {}
