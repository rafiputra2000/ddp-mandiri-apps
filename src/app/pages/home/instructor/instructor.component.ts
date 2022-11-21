import { Component, OnInit } from '@angular/core';
import { Instructor } from './model/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  // buat properti untuk di store ke view
  instructors: Instructor[] = [];
  // instructors = [
  //   {
  //     name: 'Mas Jun',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun2',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun3',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun4',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun5',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun6',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun7',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  //   {
  //     name: 'Mas Jun8',
  //     age: '29',
  //     address: 'jakarta'
  //   },
  // ]



  constructor() { }

  ngOnInit(): void {
    //panggil fungsi agar properti ter isi
    this.getInstructor();
    console.log(this.instructors)
  }

  // fungsi untuk menampung value
  getInstructor(): void {
    const instructors: Instructor[] = [
      {
        name: 'Jution JK',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum consequatur delectus, repellat at obcaecati neque tempora eligendi cupiditate repellendus, quisquam inventore sed possimus officiis ipsam praesentium veritatis excepturi architecto debitis.',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter text-dark mt-1',
            link: ''
          },
          {
            icon: 'bi bi-facebook text-dark mt-1',
            link: ''
          },
          {
            icon: 'bi bi-linkedin text-dark mt-1',
            link: ''
          },
          {
            icon: 'bi bi-instagram text-dark mt-1',
            link: ''
          }
        ]

      }
    ];
    this.instructors = instructors;
  }

}
