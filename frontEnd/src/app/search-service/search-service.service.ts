import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {
  private router: Router;
  private http: HttpClient;
  private url: string;
  public result: Subject<Object>;
  
  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
    this.result = new Subject();
    this.url = "http://localhost:4000/api/v1/twitter-test";
   }

   doSearch(terms){
     console.log(terms, 'hello');
    return this.http.get(this.url+'?q='+terms).subscribe((result)=>{
      this.result.next(result);
    });
   }

}
