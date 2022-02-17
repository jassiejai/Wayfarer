import { Component, OnInit } from '@angular/core';
// import { CITIES } from '../cities';
import { ActivatedRoute, Router } from '@angular/router';
import { POSTS } from '../posts' // importing post array for the search

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // cityList: any = CITIES;
  postList: any = POSTS;
  // cityPosts: any = this.cityList.posts;
  // matchingPosts: any = [];
  // cities: any;
  posts: any;


    public searchText: string = '';
    // dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

    constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
    for (let i = 0; i < this.postList.length; i++) {
      if (event.originalTarget.innerHTML==this.postList[i].title){
        this.router.navigate(['cities/',this.postList[i].cityId,'post',this.postList[i].id]);
      }
    }

    // this.router.navigate(['cities/',event.value]);
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