import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SearchService {
  private router: Router;
  private http: HttpClient;
  private url: string;

  
  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': this.token
    //   })
    // };
    this.url = "https://api.twitter.com/1.1/search/tweets.json";
   }

   doSearch(terms){
    return this.http.get(this.url+'?q='+terms).subscribe((result)=>{
      console.log(result)
    });
   }

}
