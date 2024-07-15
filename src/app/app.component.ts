import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarTaComponent} from "./components/toolbar-ta/toolbar-ta.component";
import {ClassicSectionTaComponent} from "./components/classic-section-ta/classic-section-ta.component";
import {MatIconModule} from '@angular/material/icon';
import {InteractiveSectionComponent} from "./components/interactive-section/interactive-section.component";
import {CardsSectionTaComponent} from "./components/cards-section-ta/cards-section-ta.component";
import {FaqSectionComponent} from "./components/faq-section/faq-section.component";
import {FooterTaComponent} from "./components/footer-ta/footer-ta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarTaComponent, ClassicSectionTaComponent, MatIconModule, InteractiveSectionComponent, CardsSectionTaComponent, FaqSectionComponent, FooterTaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-app';
}
