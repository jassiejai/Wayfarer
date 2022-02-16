import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities : any = CITIES;
  city: any;
  post: any;


  constructor() { }

  ngOnInit(): void {
      // this.route.paramMap.subscribe(param => {
  
      //   const postId = parseInt(param.get('postId'), 15)
  
      //   this.city = CITIES.find(city =>{
      //     return city.id === parseInt(param.get('id'), 15);
      //   });
  
      //   this.post = this.city.posts[postId];
      // });
  
      console.log(this.city, this.post)
    }
}
