import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {NgClass, NgFor, NgStyle} from "@angular/common";

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'],
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    NgClass,
    NgFor
  ]
})
export class FaqSectionComponent {
  faqs = [
    {
      question: 'Quais são os benefícios do outsourcing?',
      answers: [
        'O outsourcing permite que você tenha acesso a desenvolvedores experientes sem a necessidade de contratar uma equipe interna completa.',
        'Você pode escalar sua equipe de acordo com a demanda do projeto, oferecendo flexibilidade e controle de custos.',
        'Além disso, você pode focar em suas atividades principais enquanto a equipe de outsourcing cuida do desenvolvimento.'
      ],
      isOpen: false
    },
    {
      question: 'Como funciona o desenvolvimento de apps?',
      answers: [
        'O desenvolvimento de apps envolve várias etapas, desde a concepção da ideia e design até a programação e lançamento.',
        'Trabalhamos com metodologias ágeis para garantir que o produto final atenda às suas expectativas e possa ser ajustado conforme necessário durante o processo.',
        'Após o lançamento, oferecemos suporte contínuo e atualizações para garantir que seu app permaneça funcional e relevante.'
      ],
      isOpen: false
    },
    {
      question: 'O que inclui a consultoria de TI?',
      answers: [
        'Nossa consultoria de TI inclui uma análise detalhada dos seus processos e infraestrutura tecnológica.',
        'Oferecemos recomendações estratégicas para otimizar seu desempenho e segurança.',
        'Também ajudamos na implementação de novas tecnologias e na migração de sistemas legados para soluções mais modernas.'
      ],
      isOpen: false
    }
  ];

  constructor() { }

  toggleDrawer(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}
