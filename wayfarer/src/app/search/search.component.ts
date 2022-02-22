import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute, Router } from '@angular/router';
import { PostdataService } from '../postdata.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postTitles: string[] = [];
  cities: any;
  postResult: any;
  posts = this.postDataService.getAllPosts();
    public searchText: string = '';
    

    constructor(private route: ActivatedRoute, private router: Router, private postDataService: PostdataService) { }

  ngOnInit(): void {
    // Gets all the post titles and puts them in an array for the menu list
      // for(let i = 0; i < CITIES.length; i++){
      //   for (let j = 0; j <CITIES[i].posts.length; j++){
      //     this.postTitles.push(CITIES[i].posts[j].title);
      //   }
      // }

      // Gets all the post titles from post service and puts them in an array for the search list
      this.posts.forEach((p) => {
            
          this.postTitles.push(p.title)
        
      });
      console.log(this.postTitles)
      
  }
  // Compares the innerHTML title to the city.post title, if match is found then pull the city id and post id and route
  onChange(event: any){
    console.log(event)
    // Using the cities.ts array
    // for(let i = 0; i < CITIES.length; i++){
    //   console.log(CITIES[i].posts);
    //   for (let j = 0; j < CITIES[i].posts.length; j++){
    //     console.log(CITIES[i].posts[j].title)
    //       if (event.originalTarget.innerHTML==CITIES[i].posts[j].title){
    //         this.router.navigate(['cities/',CITIES[i].id,'post',CITIES[i].posts[j].id]);
    //     }
    //   }
    // }
    // CITIES.forEach(city =>{
    //   console.log(city.name +" : " + city.id)
    // })
    // Pulling directly from the post service and routing with post id and city id
    this.posts.forEach((p) => {
         
        console.log(p)
        if(p.title === event.originalTarget.innerHTML) {
          this.router.navigate(['cities/',p.cityId,'post',p.id]);
        }
      
    });
  }
  // Clears search bar after a selection is made
  clearSearch() {
    this.searchText = '';
  }

}