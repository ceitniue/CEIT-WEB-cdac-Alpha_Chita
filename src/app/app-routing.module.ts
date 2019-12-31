import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { GallaryComponent } from './gallary/gallary.component';
import { TeamComponent } from './team/team.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'gallery', component: GallaryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [

  ContactComponent,
  AboutComponent,
  FAQComponent,
  GallaryComponent,
  TeamComponent,
  CoursesComponent,
  HomeComponent

]
