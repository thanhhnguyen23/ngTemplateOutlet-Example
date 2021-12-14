import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NestedContentComponent } from './nested-content/nested-content.component';
import { PowerContentComponent } from './power-content/power-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NestedContentComponent,
    PowerContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
