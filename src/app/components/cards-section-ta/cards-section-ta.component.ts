import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-cards-section-ta',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatIcon,
    NgStyle,
    NgForOf
  ],
  templateUrl: './cards-section-ta.component.html',
  styleUrl: './cards-section-ta.component.css'
})
export class CardsSectionTaComponent {
  cards = [
    {
      icon: 'engineering',
      premiumText: "- Desenvolvimento sob demanda",
      cancelText: "- Flexibilidade para crescer conforme necessário",
      subscriptionText: "- Contratação de desenvolvedores especializados",
      title: "Outsourcing",
      price: "A partir de $25/hora",
      content: "Nosso serviço de outsourcing oferece desenvolvedores experientes para atender às suas necessidades específicas de projeto, seja para um desenvolvimento completo ou suporte especializado."
    },
    {
      icon: 'smartphone',
      premiumText: "- Soluções de TI personalizadas",
      cancelText: "- Escalabilidade conforme seu crescimento",
      subscriptionText: "- Gerenciamento completo de projetos",
      title: "Desenvolvimento de Apps",
      price: "Preço sob consulta",
      content: "Oferecemos uma gama completa de serviços de desenvolvimento de apps, incluindo design, desenvolvimento, e manutenção, tudo adaptado para alinhar com seus objetivos empresariais."
    },
    {
      icon: 'support_agent',
      premiumText: "- Expertise em tecnologia",
      cancelText: "- Foco em inovação e eficiência",
      subscriptionText: "- Implementação de práticas ágeis",
      title: "Consultoria",
      price: "A partir de $50/hora",
      content: "Nossa consultoria proporciona insights valiosos e estratégias eficientes para otimizar seus processos e impulsionar a transformação digital da sua empresa."
    },
  ];
  constructor() {
  }


}
