import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CitiesService } from '../cities/cities.service';
import { Validators } from '@angular/forms';

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

  constructor( private route: ActivatedRoute, private fBuild: FormBuilder, private citiesService: CitiesService) { }
  

  posted = this.citiesService.getCityId();
  pForm : FormGroup;

  get inf(): {[key: string] : AbstractControl}{
    return this.form.controls;
  };

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
    this.pForm = this.fBuild.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      author: ['', Validators.required],
      body: ['', Validators.required]
    });
  }


}
