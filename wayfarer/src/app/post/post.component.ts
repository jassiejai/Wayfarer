import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { PostdataService } from '../postdata.service';
// import { Post } from '../post';
// import { toArray } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  // cities : any = CITIES;
  city: any;
  post: any;
  posts = this.postDataService.getAllPosts();
  citypost: any;


constructor( private route: ActivatedRoute, private citiesService: CitiesService, private postDataService: PostdataService) { }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const postId = parseInt(params.get('postId') || 'error');
    // console.log(postId); //this one gets the post ID

    this.city = CITIES.find( c => {
      let paramId :string = this.citiesService.getCityId();
      // console.log(paramId) //this one gets the city id
      return c.id === parseInt(paramId);
    })

    this.citypost = this.posts.find((post: any) => {
    return post[0].cityId === this.city.id;
    });
    
    this.citypost.forEach((post: any) =>{
      if(post.id === postId) {
        this.post = post;
      }
      return post.id === postId;
    })
  })
  console.log(this.city)
  console.log(this.post);
  } 
}


