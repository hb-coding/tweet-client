import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../../search-service/search-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  private result;
  private terms: String;
  private route: ActivatedRoute;
  private searchService: SearchServiceService;
  private hashTagList: Array<string>;

  constructor(route: ActivatedRoute, searchService: SearchServiceService) { }

  ngOnInit() {
  }

}
