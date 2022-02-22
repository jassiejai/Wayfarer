import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from '../cities/cities.service';
import { DatePipe } from '@angular/common'
import { PostdataService } from '../postdata.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// @Output() createPost = new EventEmitter<Post>();

// createPost() {

// }

export class FormComponent implements OnInit {

  postId: any;
  cityId: number = 0;
  date : Date = new Date();
  currentDateTime = this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm');
  posts = this.postDataService.getAllPosts();
  form : FormGroup = new FormGroup ({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    body: new FormControl(''),
    date: new FormControl(''),
    cityId: new FormControl(),
    
    
  })
  // form : FormGroup;

clickedIt = false;

  constructor( private route: ActivatedRoute, private formBuild: FormBuilder, private citiesService: CitiesService, private datePipe:DatePipe, private postDataService: PostdataService) { 
    

  
  }

  ngOnInit(): void {
    
    console.log(this.currentDateTime);
    console.log(this.date);

    this.route.paramMap.subscribe(params => { 
      const cityId = parseInt(params.get('id') || 'error');
      this.cityId = cityId;
      })
      let maxId = 0;
    this.posts.forEach(post => {
      
        // console.log(p)
        if(post.cityId == this.cityId){
          if(post.id > maxId) {
            maxId = post.id;
          }
        }
      
    }) 
    console.log(maxId + 1)
   

    this.form = this.formBuild.group({
        id: new FormControl(maxId + 1),
        title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]),
        author: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required),
        date: new FormControl(this.date),
        cityId: new FormControl(this.cityId),
    })  

    throw new Error('Method not implemented.');


    
  }


  postForm = this.formBuild.group({
    id: '',
    title: ['',],
    author: '',
    body: '', 
    date: this.date,
    cityId: this.cityId,
  });

  onSubmit(): void{

    this.clickedIt = true;
    if(this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 1))
    console.log(this.form.value)
    this.postDataService.addPost(this.form.value)
  }

  onReset(): void{

    this.clickedIt = false;
    this.form.reset();
  }

}
