import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [PopupComponent],
  providers: [PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
