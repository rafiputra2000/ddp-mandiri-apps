import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  messageParents: string = ''

  onChangeInput($event: any): void{
    this.messageParents = $event;
  }

  counter: number = 0;

  onChangeCounter(count: number): void {
    this.counter = count;
  }

  title: string = 'Title from parent.component gess'

  //method untuk mengirim ke child
  messageParent: string = ''
  child(): void{
    this.messageParent = 'Halo aku dari parents'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
