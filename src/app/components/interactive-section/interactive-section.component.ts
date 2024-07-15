import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-interactive-section',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './interactive-section.component.html',
  styleUrls: ['./interactive-section.component.css']
})
export class InteractiveSectionComponent {
  showTextContent = false;

  toolbarButtons: Array<any> = [{
    buttonName: 'Serviços',
    buttonFunction: () => this.toSection('cardsSection'),
  }, {
    buttonName: 'Contato',
    buttonFunction: () => this.toSection('faqSection'),
  }]

  constructor() { }

  toSection = (sectionName: any) => {
    let el = document.getElementById(sectionName);
    if (el) {
      el.scrollIntoView();
    }
  }
}
