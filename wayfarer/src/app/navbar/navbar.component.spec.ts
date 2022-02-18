import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';


import { NavbarComponent } from './navbar.component';

import { ActivatedRoute, Router } from '@angular/router';
import {AppRoutingModule} from "../app-routing.module";
import {Location} from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router:Router;
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule, AppRoutingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"/2" takes you to London', fakeAsync(() => {
    router.navigate(['cities/2']).then(() => {
      expect(location.path()).toBe('/cities/2');
    });
  }));

  it('"/5" takes you to Gibralter', fakeAsync(() => {
    router.navigate(['cities/5']).then(() => {
      expect(location.path()).toBe('/cities/5');
    });
  }));
});
