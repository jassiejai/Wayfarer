import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute, Router } from '@angular/router';
import { POSTS } from '../posts' // importing post array for the search

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // postList: any = POSTS;
  // postList: any[] = [];
  postTitles: string[] = [];
  // cityPosts: any = this.cityList.posts;
  // matchingPosts: any = [];
  cities: any;
  posts: any;
//TODO: See if the search can work with the cities array. 
//TODO: Clean up this file.

    public searchText: string = '';
    // dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

    constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      for(let i = 0; i < CITIES.length; i++){
        for (let j = 0; j <CITIES[i].posts.length; j++){
          this.postTitles.push(CITIES[i].posts[j].title);
        }
      }

     
    // this.findPost("title 1");
    // this.route.paramMap.subscribe(params => {
    //   this.cities = CITIES.find( (city: { id: number; }) => {
    //     let paramId: string = params.get('id') || '';
    //     return city.id === parseInt(paramId);
    //   });
    // })
    // this.route.paramMap.subscribe(params => {
    //   this.posts = POSTS.find((post: { title: string | null; }) => {
    //     let paramTitle: string = params.get('title') || '';
    //     console.log(paramTitle);
    //     return post.title === paramTitle;
    //   });
    // })
  }
  // Compares the innerHTML title to the postList title, if match is found then pull the city id and post id and route
  onChange(event: any){
    // console.log(event)
    // Using the posts.ts array
    // for (let i = 0; i < this.postList.length; i++) {
    //   if (event.originalTarget.innerHTML==this.postList[i].title){
    //     this.router.navigate(['cities/',this.postList[i].cityId,'post',this.postList[i].id]);
    //   }
    // }
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
//   findPost(search: string){
//     this.matchingPosts = [];
//     //console.log(search);
//     this.cityList.posts.forEach((post: { title: string | string[]; description: string | string[]; }) => {
//       if (post.title.includes(search) || post.description.includes(search)) {
//         this.matchingPosts.push(post);
//       }
//     });
//     console.log(this.matchingPosts);

// }
}