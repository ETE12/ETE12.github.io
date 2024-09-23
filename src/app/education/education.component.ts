import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education : Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      titulo: "Ingeniería en Software",
      institucion: "Universidad Veracruzana",
      fecha: "2022-2026",
    };
    this.education.push(education1);
    console.log(this.education);
  }
}