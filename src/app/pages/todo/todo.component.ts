import { Component, OnInit } from '@angular/core';
import { id } from 'date-fns/locale';
import { TODO, Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  today: Date = new Date();
  locale: Locale = id;

  constructor() { }


  ngOnInit(): void {
  }

}
