import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CitiesService } from '../cities/cities.service';
import { Validators } from '@angular/forms';
import { createPostfix } from 'typescript';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// @Output() createPost = new EventEmitter<Post>();

// createPost() {

// }

export class FormComponent implements OnInit {


  // title;
  date : Date = new Date();





  // form : FormGroup = new FormGroup ({

  //   title: new FormControl(null),
  //   author: new FormControl(null),
  //   body: new FormControl(null)

  // })
  form : FormGroup = new FormGroup ({

    title: new FormControl(null),
    author: new FormControl(null),
    body: new FormControl(null)

  })
clickedIt = false;

  constructor( private route: ActivatedRoute, private citiesService: CitiesService) { }
  

  // posted = this.citiesService.getCityId();
  // pForm : FormGroup;

  // get inf(): {[key: string] : AbstractControl}{
  //   return this.form.controls;
  // };

  // auto create id for each new item 

  onSubmit(): void{

    this.clickedIt = true;
    if(this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 1))
  }

  onReset(): void{

    this.clickedIt = false;
    this.form.reset();
  }

  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.pForm = this.fBuild.group({
    //   title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
    //   author: ['', Validators.required],
    //   body: ['', Validators.required]
    // });

    
  

  }


}
