import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public notFound: boolean;
  public error: boolean;
  productCodeFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private readonly router: Router,
    private readonly service: PlantService,
  ) { }

  ngOnInit(
  ): void {
  }

  go() {
    this.service.getDeviceIdBySerialNumber(this.productCodeFormControl.value).subscribe(id => {
      this.router.navigateByUrl("/plant/" + id);
    }, err => {
      if (err.status == 404) {
        this.notFound = true;
      }
      else {
        this.error = true;
      }
    });
  }

}
