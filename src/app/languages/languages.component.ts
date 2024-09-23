import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  language : Array<any> = [];
  ngOnInit(): void {
  let language1 = {
  espanol: "Español",
  ingles: "Inglés",
  italiano: "Italiano",
};
  this.language.push(language1);
  console.log(this.language);
}
}
