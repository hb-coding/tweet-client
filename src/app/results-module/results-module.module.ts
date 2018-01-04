import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, ResultsComponent, SidebarComponent, SuggestionsComponent, TweetBoxComponent]
})
export class ResultsModuleModule { }
