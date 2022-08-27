import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrivateModule } from './Private/Private.module';
import { PublicModule } from './Public/Public.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AppRoutingModule } from './app-router';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    PrivateModule,
    PublicModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
