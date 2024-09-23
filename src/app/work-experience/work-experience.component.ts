import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
  let work1 = {
  fecha: "2022-2023",
  ubicacion: "Orizaba Ver.",
  puesto: "Mesero",
  empresa: "La Farina",
  logros : [
  { descripcion : "Mesero en el restaurante La Farina" },
  { descripcion : "Atencion a clientes" }]
  };

  this.workExperience.push(work1);
  console.log(this.workExperience);
  }
}
