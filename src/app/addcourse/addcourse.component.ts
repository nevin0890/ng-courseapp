import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private api:ApiService) { }
   courseTitle = ""
  courseDescription = ""
  courseDuration = ""
  courseDate = ""
  courseVenue = ""

  
  readValues = () => {
    let data = {
      courseTitle: this.courseTitle,
      courseDescription: this.courseDescription,
      courseDuration: this.courseDuration,
      courseDate: this.courseDate,
      courseVenue: this.courseVenue
    }
    console.log(data)
    this.api.addCourse(data).subscribe((response:any)=>{
      console.log(response)
      alert("Course Added Successfully")
      this.courseTitle = ""
      this.courseDescription = ""
      this.courseDuration = ""
      this.courseDate = ""
      this.courseVenue = ""
      
    } )
      
  }

  ngOnInit(): void {
  }

}
