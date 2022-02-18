import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from '../cities/cities.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  date : Date = new Date();

  form : FormGroup = new FormGroup ({

    title: new FormControl(''),
    author: new FormControl(''),
    body: new FormControl('')

  })

clickedIt = false;

  constructor( private route: ActivatedRoute, private formBuild: FormBuilder, private citiesService: CitiesService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  posted = this.citiesService.getCityId();

  get inf(): {[key: string] : AbstractControl}{
    return this.form.controls;
  };

  // auto create id for each new item 

  postForm = this.formBuild.group({
    title: ['',],
    author: '',
    body: ''
  });

  onSubmit(): void{

    this.clickedIt = true;
    if(this.form.invalid) {
      return
    }
    console.log(JSON.stringify(this.form.value, null, 1))
  }

}
