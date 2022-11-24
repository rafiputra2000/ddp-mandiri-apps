export class Employee {
  private _fullName!: string;
  private _address!: string;

  //Getter and Setter
  get fullName() {
    return this._fullName;
  }
  set fullName(name: string) {
    this._fullName = name;
  }

  get address() {
    return this._address;
  }
  set address(name: string) {
    this._address = name;
  }

  toString(): string {
    return 'Employee name: ' + this._fullName + ' and adress: '+ this._address
  }
}
