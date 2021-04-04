import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { AppRoutingModule } from './app.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailsComponent,
    MenuComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
