import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
