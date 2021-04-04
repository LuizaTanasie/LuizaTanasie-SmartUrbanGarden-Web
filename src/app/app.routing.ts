import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/plant', pathMatch: 'full' },
  { path: 'plant', component: PlantDetailsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }