import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // cities : any = CITIES;
  city: any = 0;
  post: any = 0;

  test : string ="miami";

  
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("this is a test");
    this.route.paramMap.subscribe(params => {
      const postId = parseInt(params.get('postId') || '');
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
      this.post = this.city.posts[postId];
      console.log(this.city.name)
    })
    console.log(this.city, this.post);
  }
    //   this.route.paramMap.subscribe(param => {
  
    //     // const postId = parseInt(param'postId')
  
    //     this.city = CITIES.find(city =>{
    //       return city.id === parseInt(paramId);
    //     });
  
    //     this.post = this.city.posts[postId];
    //   });
  
    //   console.log(this.city, this.post)
    // }
}
