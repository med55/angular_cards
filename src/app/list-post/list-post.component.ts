import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Card } from '../card';
import { PostComponent } from '../post/post.component';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  cards: Card[][];
  currentPage: number = 0
  @ViewChildren("child") postComponents : QueryList<PostComponent>;
  constructor(private postService:PostDataService) { }

  ngOnInit() {
    this.cards = this.postService.getData();
  }
  updatePage(pageNumber) {
    this.currentPage = pageNumber;
  }
  expandAll(){
    this.postComponents.forEach(e=>e.getfullText() )
  }
  toggleAll(){
    console.log("currentPage : "+this.currentPage );
    this.cards[this.currentPage].forEach(post=> post.isFav = true);
  }
}
