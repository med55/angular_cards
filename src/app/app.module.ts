import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TruncatePipe } from './truncate.pipe';
import { PostDataService } from './post-data.service';
import { HighlightDirective } from './highlight.directive';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostComponent,
    PaginationComponent,
    TruncatePipe,
    HighlightDirective,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TruncatePipe,PostDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
