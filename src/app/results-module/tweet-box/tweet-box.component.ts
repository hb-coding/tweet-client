import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {
  @Input() tweet;
  
  constructor() { }

  ngOnInit() {
  }

}
