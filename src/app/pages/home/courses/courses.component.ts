import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  instructors = [
    {
      name: 'Mas Jun',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun2',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun3',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun4',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun5',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun6',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun7',
      age: '29',
      address: 'jakarta'
    },
    {
      name: 'Mas Jun8',
      age: '29',
      address: 'jakarta'
    },

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
