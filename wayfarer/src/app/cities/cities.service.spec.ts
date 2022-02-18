import { TestBed } from '@angular/core/testing';

import {AppRoutingModule} from "../app-routing.module";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AppRoutingModule, HttpClientModule ]
    });
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
