import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../search-module/search/search.component';
import { ResultsComponent } from '../results-module/results/results.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
