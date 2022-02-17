import { Component } from '@angular/core';
import { CITIES } from './cities'
import { POSTS } from './posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayfarer';
  cities = CITIES;
  posts = POSTS;
  
  getCities(){
    return this.cities;
  }
}
