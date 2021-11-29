import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMainContentComponent } from './src/View/start-main-content/start-main-content.component';
import { TopComponent } from './src/View/Start/Top/top/top.component';
import { SearchComponent } from './src/View/search/search.component';
import { SettingsComponent } from './src/View/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    StartMainContentComponent,
    SearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
