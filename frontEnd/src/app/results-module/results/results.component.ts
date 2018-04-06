import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../search-service/search-service.service';

@Component({
  selector: 'app-results',
  providers: [SearchService],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  private result;
  private terms: String;
  private route: ActivatedRoute;
  private searchService: SearchService;
  private hashTagList: Array<string>;

  constructor(route: ActivatedRoute, searchService: SearchService) {
    this.searchService = searchService;
    this.route = route;

    this.result = this.searchService.result;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.terms = params['query'];
       this.searchService.doSearch(this.terms);
    })

    this.searchService.result.subscribe((data)=>{
      this.result = data;
      this.buildHashTagList();
    })
  }

  heardEvent(param){
    console.log(param);
  }

  buildHashTagList() {
    if (this.result && this.result.statuses) {
      this.result.statuses.forEach((status) => {
        status.entities.hashtags.forEach((tag) => {
          //If hashtag is not already in the list
          if (this.hashTagList.indexOf(tag.text) === -1) {
            this.hashTagList.push(tag.text);
          }
        })
      })
    }
  }

}
