import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() textCard: string;

  constructor() {
    this.textCard = '';
  }

  ngOnInit(): void {
    console.log(this.textCard);
  }
}
