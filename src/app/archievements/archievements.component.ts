import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archievements.component.html',
  styleUrl: './archievements.component.css'
})
export class ArchievementsComponent {
  archievement : Array<any> = [];
  ngOnInit(): void {
  let arch1 = {
  curso1: "AWS Certified AI Practitioner (2024)",
  curso2: "Introduction to Game Development (2023)",
};
  this.archievement.push(arch1);
  console.log(this.archievement);
  }
}
