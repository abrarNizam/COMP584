import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from '../country-population';
import { environment } from '../../environments/environment.development';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit{

  public population: CountryPopulation | undefined;
    constructor(private http: HttpClient, private activatedroute: ActivatedRoute ){}
  
    ngOnInit(): void {
      this.getCountryPopulation()
    }
  
  
     getCountryPopulation() {
      let id = this.activatedroute.snapshot.paramMap.get("id");
        this.http.get<CountryPopulation>(`${environment.baseUrl}/api/Countries/GetPopulation/${id}`).subscribe({
          next: result => this.population = result, 
          error: error => console.error(error)
        }  
        );
      }
}
