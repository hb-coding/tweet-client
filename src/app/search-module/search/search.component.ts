import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchString: String;
  private router: Router;

  constructor(router: Router) {
    this.searchString = '';
    this.router = router;
  }

  ngOnInit() {
  }

  doSearch() {
    this.router.navigate(['/results'], { queryParams: { query: this.searchString } });
  }

}
