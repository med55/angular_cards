import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Card } from '../card';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() card: Card;
  fullText: string;
  constructor(private pipe: TruncatePipe) { }

  ngOnInit() {
    this.fullText = this.card.contenu;
    this.card.contenu = this.pipe.transform(this.card.contenu, 30);
  }
  getfullText() {
    this.card.contenu = this.fullText;
  }

  toggleFavorie() {
    this.card.isFav = !this.card.isFav;
  }
}
