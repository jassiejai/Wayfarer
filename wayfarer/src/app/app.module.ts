import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
// import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'; // For future use for front page carousel
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    NavbarComponent,
    PostComponent,
    SearchComponent,
    SliderComponent,
    FilterPipe,
   FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    // MdbCheckboxModule, 
    ReactiveFormsModule
// MDBBootstrapModule,
// MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }