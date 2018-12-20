import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor() { }
  getData(){
    return [
      [
        new Card("Card title 1", "Some quick example text to build on the card title and make up the bulk of the card's content 1."),
        new Card("Card title 2", "Some quick example text to build on the card title and make up the bulk of the card's content 2."),
        new Card("Card title 3", "Some quick example text to build on the card title and make up the bulk of the card's content 3.")
      ],
      [
        new Card("Card title 4", "Some quick example text to build on the card title and make up the bulk of the card's content 4."),
        new Card("Card title 5", "Some quick example text to build on the card title and make up the bulk of the card's content 5."),
        new Card("Card title 6", "Some quick example text to build on the card title and make up the bulk of the card's content 6.")
      ],
      [
        new Card("Card title 7", "Some quick example text to build on the card title and make up the bulk of the card's content 7."),
        new Card("Card title 8", "Some quick example text to build on the card title and make up the bulk of the card's content 8."),
        new Card("Card title 9", "Some quick example text to build on the card title and make up the bulk of the card's content 9.")
      ]
    ]
  }
}
