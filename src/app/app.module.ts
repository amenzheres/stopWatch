import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchSecondComponent } from './modules/stop-watch-second/stop-watch-second.component';

@NgModule({
  declarations: [
    AppComponent,
    StopWatchSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
