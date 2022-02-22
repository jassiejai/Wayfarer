import { Component, OnInit } from '@angular/core';
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

export class FormComponent implements OnInit {

  cityId: number = 0;
  date : Date = new Date();
  currentDateTime = this.datePipe.transform((new Date), 'MM/dd/yyyy h:mm');
  form : FormGroup = new FormGroup ({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    body: new FormControl(''),
    date: new FormControl(this.date),
    cityId: new FormControl(),
  
    
  })

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
   

    throw new Error('Method not implemented.');


    
  }

  posted = this.citiesService.getCityId();

  get inf(): {[key: string] : AbstractControl}{
    return this.form.controls;
  };

  // auto create id for each new item 

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
      return
    }
    console.log(JSON.stringify(this.form.value, null, 1))
  }

}
