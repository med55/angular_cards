import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() nbPage: number;
  @Output() pageClick = new EventEmitter<number>();

  post

  pages;
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.nbPage);
  }
  updatePage(i) { 
    this.pageClick.emit(i);
  }
}
