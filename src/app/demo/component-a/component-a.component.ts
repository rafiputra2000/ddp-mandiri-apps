import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  isDisabled: boolean = false


  disabled(): void{
    setTimeout(() => {
      this.isDisabled = true;
    },5000)
  }

  name: string = 'Rafi';
  address: string = 'pandugo';
  participants: string[]= ['matahari', 'bulan', 'bintang'];
  language = {
    name: 'Angular',
    status: 'Advance'
  }

  onMessage(): string {
    return 'onMessage Hello'
  }

  onViewMessage(): string {
    return `${this.language.name} ${this.language.status}`
  }

  employees = [
  {
    name: 'Rafi',
    address: 'pandugo',
    unit: 'IT'
  },
  {
    name: 'Pramasukma',
    address: 'pandugo',
    unit: 'IT'
  },
  {
    name: 'Ekhaputera',
    address: 'pandugo',
    unit: 'IT'
  },
  {
    name: 'Rafi',
    address: 'pandugo1',
    unit: 'IT'
  },
  {
    name: 'Rafi',
    address: 'pandugo2',
    unit: 'IT'
  },
]

  constructor(
    // private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.disabled()
    // this.route.queryParams.subscribe((params) => {
    //   const { name, address } = params;
    //   this.name = name;
    //   this.address = address;
    // })
  }


  // penerapan event binding
  message: string= '';
  showMe(): void {
    this.message = 'Ahh aku di klik'
  }

  messageHover: string = "hover aku dong!"
  mouseOut(): void{
    this.messageHover = 'Lagi Dong!!!'
  }

  mouseOver(): void {
    this.messageHover = 'Terima Kasih sudah meng-hover aku !'
  }


  messageInput: string = ''
  onMessageInput($event: any){
    console.log('$event', $event);
    console.log('$event.target.value', $event.target.value);
    const { value } = $event.target;

    if (value.toLowerCase() !== 'mandiri') {
      this.messageInput= 'Aku tetap mandirian';
    } else {
      this.messageInput = 'Aku mandirian';
    }
  }
}
