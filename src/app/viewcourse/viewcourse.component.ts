import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchCourses();
  }
  status:boolean = false;
  
  fetchCourses = () => {
    this.api.getCourseList().subscribe((data) => {
      this.viewCourse = data
    this.status = true});
  }

  viewCourse:any=[]

  ngOnInit(): void {
  }

}
