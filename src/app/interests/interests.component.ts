import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interest : Array<any> = [];
  ngOnInit(): void {
  let interest1 = {
  videogames: "Videojuegos",
  ia: "Inteligencia Artificial",
  tecnoavances: "Avances Tecnológicos",
  vidaalien: "Vida Alienígena",
  scifi: "Historias de Ciencia Ficción", 
};
  this.interest.push(interest1);
  console.log(this.interest);
  }
}
