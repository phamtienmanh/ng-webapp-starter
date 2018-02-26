import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ThemeModule
} from './themes/app/app.module';
import {appRoutes} from './pages/routes';
import Pages from './pages'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule,
    RouterModule.forRoot(appRoutes),
    ...Pages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
