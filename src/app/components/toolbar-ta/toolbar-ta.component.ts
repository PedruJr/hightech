import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-toolbar-ta',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    NgForOf,
  ],
  templateUrl: './toolbar-ta.component.html',
  styleUrl: './toolbar-ta.component.css'
})
export class ToolbarTaComponent {

  toolbarButtons: Array<any> = [{
    buttonName: 'Quem somos',
    buttonFunction: () => this.toSection('interactiveSection'),
  },{
    buttonName: 'Serviços',
    buttonFunction: () => this.toSection('cardsSection'),
  },{
    buttonName: 'Contato',
    buttonFunction: () => this.toSection('faqSection'),
  },{
    buttonName: 'Perguntas Frequentes',
    buttonFunction: () => this.toSection('faqSection'),
  }]

  constructor() {
  }

  toSection = (sectionName: any) => {
    let el = document.getElementById(sectionName);
    if (el) {
      el.scrollIntoView();
    }
  }
}
