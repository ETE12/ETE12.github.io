import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from "./skills/skills.component";
import { LanguagesComponent } from "./languages/languages.component";
import { InterestsComponent } from "./interests/interests.component";
import { ArchievementsComponent } from "./archievements/archievements.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent, SkillsComponent, LanguagesComponent, InterestsComponent, ArchievementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycv';
}

