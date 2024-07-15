import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-footer-ta',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './footer-ta.component.html',
  styleUrls: ['./footer-ta.component.css']
})
export class FooterTaComponent {

}
