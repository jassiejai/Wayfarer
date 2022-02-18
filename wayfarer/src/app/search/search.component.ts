import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postTitles: string[] = [];
  cities: any;
  posts: any;
 
    public searchText: string = '';
    

    constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Gets all the post titles and puts them in an array for the menu list
      for(let i = 0; i < CITIES.length; i++){
        for (let j = 0; j <CITIES[i].posts.length; j++){
          this.postTitles.push(CITIES[i].posts[j].title);
        }
      }
  }
  // Compares the innerHTML title to the city.post title, if match is found then pull the city id and post id and route
  onChange(event: any){
    // Using the cities.ts array
    for(let i = 0; i < CITIES.length; i++){
      console.log(CITIES[i].posts);
      for (let j = 0; j < CITIES[i].posts.length; j++){
        console.log(CITIES[i].posts[j].title)
          if (event.originalTarget.innerHTML==CITIES[i].posts[j].title){
            this.router.navigate(['cities/',CITIES[i].id,'post',CITIES[i].posts[j].id]);
        }
      }
    }
  }
  // Clears search bar after a selection is made
  clearSearch() {
    this.searchText = '';
  }

}