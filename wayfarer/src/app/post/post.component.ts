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
  post: any = 0;
  posts = this.postDataService.getAllPosts();
  citypost: any;
  // date: Date = new Date();
  

//   form : FormGroup = new FormGroup ({

//     title: new FormControl(''),
//     author: new FormControl(''),
//     body: new FormControl('')

//   })

// clickedIt = false;

constructor( private route: ActivatedRoute, private citiesService: CitiesService, private postDataService: PostdataService) { }

get sortPosts(){
  return this.citypost.sort((a:any,b:any) => {
    return <any>new Date(b.date) - <any>new Date(a.date);
  });
}

findPost(){

  console.log("this is a test");
  this.route.paramMap.subscribe(params => {
    const postId = parseInt(params.get('postId') || 'error');


    console.log(postId);
    this.city = CITIES.find( c => {
      let paramId :string = this.citiesService.getCityId();
      // let paramId: string = params.get('id') || '';
      console.log(paramId)
      return c.id === parseInt(paramId);
    })


    
      this.citypost = this.posts.find((post: any) => {
        console.log(post);
        console.log("city id: " + post[0].cityId);
        if (post[0].cityId === this.city.id) {
          console.log(post[0].cityId)
          console.log(this.city.id)   
      }
      console.log(post[0].cityId === this.city.id)
      return post[0].cityId === this.city.id;
      });
    
    console.log(this.citypost)
    this.citypost.forEach((post: any) =>{
      
      if(post.id === postId) {
        console.log(post)
        this.post = post;
      }
      return post.id === postId;
    })
    console.log(this.post)

    // let postArray: any[] = this.posts;
    // console.log(postArray);
    // console.log(postId);
    // this.post = postArray.find( p => {
    //   return p.id === postId;
    // })
  })
  console.log(this.city)
  console.log(this.post);

  // this.route.paramMap.subscribe(params => {
  //   this.citypost = this.posts.find((post: any) => {
  //     console.log(post);
  //     console.log("city id: " + post[0].cityId);
  //     if (post[0].cityId === this.city.id) {
  //       console.log(post[0].cityId)
  //       console.log(this.city.id)   
  //   }
  //   console.log(post[0].cityId === this.city.id)
  //   return post[0].cityId === this.city.id;
  //   });
  // });
  // console.log(this.citypost)
  // this.citypost.forEach((post: any) =>{
  //   if
  // })
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
    // for(let i = 0; i < CITIES.length; i++){
  //   console.log(CITIES[i].posts);


  // for (let j = 0; j < this.city.posts.length; j++){
  //   console.log(this.city.posts[j].title)
      // if (event.originalTarget.innerHTML==CITIES[i].posts[j].title){
      //   this.router.navigate(['cities/',CITIES[i].id,'post',CITIES[i].posts[j].id]);
      
    }
  }


