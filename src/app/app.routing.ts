import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ConfigureDeviceComponent } from './components/configure-device/configure-device.component';
import { LandingComponent } from './components/landing/landing.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'plant/:id', component: PlantDetailsComponent },
  { path: 'configure/:id', component: ConfigureDeviceComponent },
  { path: 'analytics/:id', component: AnalyticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }