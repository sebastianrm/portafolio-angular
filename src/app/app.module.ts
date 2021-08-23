import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AboutComponent } from './components/sections/about/about.component';
import { LatestComponent } from './components/sections/latest/latest.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { GithubComponent } from './components/sections/github/github.component';
import { BasicComponent } from './components/aside/basic/basic.component';
import { SkillsComponent } from './components/aside/skills/skills.component';
import { TestimonialsComponent } from './components/aside/testimonials/testimonials.component';
import { EducationComponent } from './components/aside/education/education.component';
import { LanguagesComponent } from './components/aside/languages/languages.component';
import { BlogComponent } from './components/aside/blog/blog.component';
import { ListmusicComponent } from './components/aside/listmusic/listmusic.component';
import { ListconferencesComponent } from './components/aside/listconferences/listconferences.component';
import { CreditsComponent } from './components/aside/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LatestComponent,
    ProjectsComponent,
    ExperienceComponent,
    GithubComponent,
    BasicComponent,
    SkillsComponent,
    TestimonialsComponent,
    EducationComponent,
    LanguagesComponent,
    BlogComponent,
    ListmusicComponent,
    ListconferencesComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
