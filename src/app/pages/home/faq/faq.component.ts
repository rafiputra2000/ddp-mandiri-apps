import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: any[] = []


  constructor() { }

  //inner HTML
  subTitle = '<strong>FAQ</strong> Description'

  // style binding
  styles = {
    color: 'gold',
    fontSize: '4rem',
    fontWeight: '100'
  }

  ngOnInit(): void {
    this.getFaqs();
    console.log(this.faqs);
  }

  getFaqs(): void{
    const faqs = [
      {
        question: 'Accordion Item #1',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, officia quam quibusdam fuga rem quod unde ducimus nostrum corrupti nobis expedita iste voluptatem animi repellendus quas pariatur, aliquam nam impedit.'
      },
      {
        question: 'Accordion Item #2',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, veniam. Commodi mollitia placeat veritatis accusamus doloremque aspernatur minima libero delectus quis eligendi nihil, iusto non odit nulla earum esse ratione!'
      },
      {
        question: 'Accordion Item #3',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis cum molestias esse modi voluptatum quidem sunt expedita consequuntur nam est commodi porro non a, laudantium eaque ut omnis ex?'
      }
    ]
    this.faqs = faqs
  }

}
