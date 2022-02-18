import { ComponentFixture, TestBed,} from '@angular/core/testing';
import { CitiesComponent } from './cities.component';
import {AppRoutingModule} from "../app-routing.module";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('CitiesComponent', () => {
  let component: CitiesComponent;
  let fixture: ComponentFixture<CitiesComponent>;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesComponent ],
      imports: [ RouterTestingModule, AppRoutingModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
