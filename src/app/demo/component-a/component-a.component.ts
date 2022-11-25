import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../101/employee';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements
OnInit,
OnChanges,
OnDestroy,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

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

  componentName = 'Component A';

  constructor(
    // private readonly route: ActivatedRoute
    ) {
      console.log(`constructor ${this.componentName} called!`);
    }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    console.log(`ngOnChanges ${this.componentName} called!`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName} called!`);
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName} called!`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck ${this.componentName} called!`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit ${this.componentName} called!`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked ${this.componentName} called!`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit ${this.componentName} called!`);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked ${this.componentName} called!`);
  }

  // ngOnInit(): void {
  //   this.disabled()
  //   // this.route.queryParams.subscribe((params) => {
  //   //   const { name, address } = params;
  //   //   this.name = name;
  //   //   this.address = address;
  //   // })
  //   const employee: Employee = new Employee()
  //   employee.fullName = 'Joko'
  //   employee.address = 'Bali'

  //   console.log(employee.fullName)
  //   console.log(employee.address)
  //   console.log(toString())
  // }


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
