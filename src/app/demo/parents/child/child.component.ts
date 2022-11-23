import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() title: string = 'Rafi' //jika @inputnya dihilangkan maka properti akan sesuai dengan isinyaa

  @Input() messageChild: string = '' // parents ke child
  // @Output() messageParents = new EventEmitter<String>()

  // One Way Binding
  // @Output() counter = new EventEmitter<number>()

  //Two-Way Data Binding
  @Input() counter:number= 0;
  @Output() counterChange = new EventEmitter<number>()

  //Two-Way Data Binding
  @Input() messageParents: string = ''
  @Output() messageParentsChange = new EventEmitter<any>()


  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  messageParentIni: string = ''
  onMessageInput($event: any){
    console.log('$event', $event);
    console.log('$event.target.value', $event.target.value);
    const { value } = $event.target;
    this.messageParentsChange.emit(this.messageParentIni)

    // if (value.toLowerCase() !== 'mandiri') {
    //   this.messageParentIni = 'Aku tetap mandirian';
    //   this.messageParentsChange.emit(this.messageParentIni)
    // } else {
    //   this.messageParentIni = 'Aku mandirian';
    //   this.messageParentsChange.emit(this.messageParentIni)
    // }
  }
  // onIncrease() {
  //   this.count++
  //   this.counter.emit(this.count);
  // }

  // onDecrease() {
  //   if(this.count > 0){
  //     this.count--
  //   }
  //   this.counter.emit(this.count);
  // }

  onIncrease() {
    this.count++
    this.counterChange.emit(this.count);
  }

  onDecrease() {
    if(this.count > 0){
      this.count--
    }
    this.counterChange.emit(this.count);
  }

}
