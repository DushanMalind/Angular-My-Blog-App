import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
