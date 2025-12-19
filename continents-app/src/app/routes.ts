import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContinentsComponent } from './continents/components/continents.component';
import { CountriesComponent } from './countries/components/countries.component';
import { CountryLanguagesComponent } from './languages/components/country-languages.component';
import { CountriesStatsComponent } from './stats/components/country-stats.component';
import { CountriesFilteredComponent } from './countriesFiltered/components/countriesFiltered.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'continents', component: ContinentsComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'countries/:id/languages', component: CountryLanguagesComponent },
      { path: 'countries-stats', component: CountriesStatsComponent },
      { path: 'countries-filtered', component: CountriesFilteredComponent }
    ]
  }
];


