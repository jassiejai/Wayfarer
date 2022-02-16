import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities : any = CITIES;
  city: any;
  posts: any;

  test : string ="miami";


  constructor( private route: ActivatedRoute) { }

  findpost(){
    
  }
  ngOnInit(): void {



    // this.route.paramMap.subscribe(params => {
    //   this.city = CITIES.find(city => {
    //     let paramId: string = params.get('id') || '';
    //     return city.id === parseInt(paramId);})


        console.log(this.cities[0].posts[0])
      // })
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
