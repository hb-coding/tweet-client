import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from '../../search-service/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchString: String;
  private router: Router;
  private searchService: SearchService;


  constructor(router: Router, searchService: SearchService) {
    this.searchString = '';
    this.searchService = searchService;
    this.router = router;
  }

  ngOnInit() {
  }

  doSearch() {
    this.searchService.doSearch(this.searchString);
    this.router.navigate(['/results'], { queryParams: { query: this.searchString } });
  }

}
