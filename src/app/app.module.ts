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
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component'
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from './services/plant.service';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigureDeviceComponent } from './components/configure-device/configure-device.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailsComponent,
    MenuComponent,
    AboutComponent,
    LandingComponent,
    ConfigureDeviceComponent,
    AnalyticsComponent,
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
    MatMenuModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
