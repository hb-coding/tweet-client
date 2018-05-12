import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() hello: String = 'hello';
  @Output() emitMe: EventEmitter<String> = new EventEmitter;

  private searchString: String;
  private router: Router;

  constructor(router: Router) {
    this.searchString = '';
    this.router = router;
  }

  ngOnInit() {
  }

  executeSearch() {
    this.router.navigate(['/results'], { queryParams: { query: this.searchString } });
  }

}
