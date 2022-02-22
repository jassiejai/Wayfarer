import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CitiesService } from '../cities/cities.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// @Output() createPost = new EventEmitter<Post>();

// createPost() {

// }

export class FormComponent implements OnInit {


  date : Date = new Date();
  currentDateTime = this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  form : FormGroup = new FormGroup ({

    title: new FormControl(''),
    author: new FormControl(''),
    body: new FormControl(''),
  
    
  })
clickedIt = false;

  constructor( private route: ActivatedRoute, private formBuild: FormBuilder, private citiesService: CitiesService, private datePipe:DatePipe) { 
    

  
  }

  ngOnInit(): void {
    console.log(this.currentDateTime);
    console.log(this.date);
    throw new Error('Method not implemented.');
    
  }


  postForm = this.formBuild.group({
    title: ['',],
    author: '',
    body: '', 
    date: this.date
  });

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

}
