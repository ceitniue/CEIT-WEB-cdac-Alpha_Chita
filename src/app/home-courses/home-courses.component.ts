import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeCourseAndroidComponent } from '../home-course-android/home-course-android.component';
 


@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.scss']
})
export class HomeCoursesComponent implements OnInit {

  

  constructor(public dialog:MatDialog ) { }

  ngOnInit() {
  }
  openDialog(){
    this.dialog.open(HomeCourseAndroidComponent);
  }

}
