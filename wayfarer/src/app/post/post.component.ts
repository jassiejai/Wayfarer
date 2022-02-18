import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';
import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
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
  // date: Date = new Date();
  

//   form : FormGroup = new FormGroup ({

//     title: new FormControl(''),
//     author: new FormControl(''),
//     body: new FormControl('')

//   })

// clickedIt = false;

constructor( private route: ActivatedRoute, private citiesService: CitiesService) { }

findPost(){

  console.log("this is a test");
  this.route.paramMap.subscribe(params => {
    const postId = parseInt(params.get('postId') || '');

    console.log(postId);
    this.city = CITIES.find( c => {
      let paramId :string = this.citiesService.getCityId();
      // let paramId: string = params.get('id') || '';
      console.log(paramId)
      return c.id === parseInt(paramId);
    })

    let postArray: any[] = this.city.posts;
    console.log(postArray);
    this.post = postArray.find( p => {
      return p.id === postId;
    })
  })
   
  console.log(this.city)
  console.log(this.post);
}

//   posted = this.citiesService.getCityId();

//   get inf(): {[key: string] : AbstractControl}{
//     return this.form.controls;
//   };

//   // auto create id for each new item 

//   postForm = this.formBuild.group({
//     title: ['',],
//     author: '',
//     body: ''
//   });

//   onSubmit(): void{

//     this.clickedIt = true;
//     if(this.form.invalid) {
//       return
//     }
//     console.log(JSON.stringify(this.form.value, null, 1))
//   }

ngOnInit(): void {
  this.findPost();
}}
