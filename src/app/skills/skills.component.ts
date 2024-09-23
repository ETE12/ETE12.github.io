import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills : Array<any> = [];
  ngOnInit(): void {
  let skills1 = {
  persistence: "Persistente",
  creativity: "Creativo",
  positive: "Positivo",
  dreamer: "Soñador",
  oportunist: "Oportunista",
  loyalty: "Leal",
  }

  this.skills.push(skills1);
  console.log(this.skills);
  }
}
