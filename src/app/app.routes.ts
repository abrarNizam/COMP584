import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';

export const routes: Routes = [
    {
        path:"weather",
        component:WeatherComponent
    },
    {
        path:"navbar",
        component:NavBarComponent
    },
    {
        path:"cities",
        component:CitiesComponent
    },
    {
        path:"countries",
        component:CountriesComponent
    },
    {
        path:"",
        component:WeatherComponent,
        pathMatch: "full"
    }
];
