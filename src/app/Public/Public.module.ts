import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './Public.component';
import { HomeComponent } from '../Public/home/home.component';
import { AppRoutingModule } from '../app-router';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    PublicComponent,
     HomeComponent,
     NavbarComponent,
     FooterComponent,
     SidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  exports: [PublicComponent,
     HomeComponent],
})
export class PublicModule {}
