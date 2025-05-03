import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Country } from '../country';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-country-edit',
  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.scss'
})
export class CountryEditComponent implements OnInit {
form!: FormGroup
  public country : Country | undefined;
  constructor(private http: HttpClient ,private activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    this.form = new FormGroup(
      {
          countryName : new FormControl("",Validators.required),
          iso2: new FormControl("", Validators.required),
          iso3: new FormControl("", Validators.required)
      }
    );

    this.populateData()
  }
  

  populateData(){
    let id = this.activatedroute.snapshot.paramMap.get("id");
             this.http.get<Country>(`${environment.baseUrl}/api/Countries/${id}`).subscribe({
             next: result => {
              this.country = result;
              this.form.patchValue(result);
            }, 
             error: error => console.error(error)
            }        
            );
  }
  onSubmit(){

  }

}
