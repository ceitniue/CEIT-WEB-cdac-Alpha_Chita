import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatDialogModule} from '@angular/material/dialog';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent,} from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ConfigService } from  './config.service';
import { SocialComponent } from './social/social.component';
import { HomeNoteComponent } from './home-note/home-note.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
 
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { HomeCourseAndroidComponent } from './home-course-android/home-course-android.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    routingComponent,
    FooterComponent,
    SocialComponent,
    HomeNoteComponent,
    HomeFeaturesComponent,
     
    HomeCoursesComponent,
    HomeCourseAndroidComponent

  ],
  entryComponents: [HomeCourseAndroidComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
