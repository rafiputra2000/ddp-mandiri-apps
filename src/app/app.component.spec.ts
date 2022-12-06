import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { from, Observable } from 'rxjs';
import { AppComponent } from './app.component';

class Person {
  name?: string;
  age?: number;
  constructor(name?: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

// 1. AppComponent, Introduction
describe('1. AppComponent, Introduction', () => {
  describe('1.1 App Component', () => {
    it('1.1 AppComponent should be exist', () => {
      let component = new AppComponent();
      expect(component).toBeTruthy();
    });
  });

  describe('1.2 Unit test using matchers for primitive data types', () => {
    let number = 1;
    let string = 'string';
    let boolean = true;
    let nullVallue = null;
    let undefinedValue = undefined;

    it('1.2.1 number should be equal to one', () => {
      expect(number).toEqual(1);
    });

    xit('1.2.2 string should be equal to string', () => {
      expect(string).toEqual('string');
    });
  });
});

// 2. Simple unit test scenario
describe('2. Simple unit test scenario', () => {
  describe('2.1 Object and array test scenario', () => {
    const actualPerson = { name: 'John', age: 20 };
    const expectedPerson = { name: 'John', age: 20 };
    const persons: Person[] = [
      new Person('John', 20),
      new Person('Adidas', 23),
    ];
    const person: Person = new Person('Judas', 12);

    it('actual person should equal to expectedPerson', () => {
      expect(actualPerson).toEqual(expectedPerson);
      expect(person).toBeInstanceOf(Person);
    });

    xit('newly added person should be instance of Person', () => {
      const newPerson2: Person = { name: 'tequila', age: 23 };
      persons.push(newPerson2);

      for (const person of persons) {
        expect(person).toBeInstanceOf(Person);
      }
    });

    it('empty Person should be truthy', () => {
      const empty: Person = new Person();
      expect(empty).toBeTruthy();
    });
  });

  describe('2.2 FakeAsync and tick test scenario', () => {
    it('asynchronous test without fakeasync', (done) => {
      let test: boolean = false;
      setTimeout(() => {
        test = true;
        expect(test).toBeTrue();
        done();
      }, 1000);
    });

    it('asynchronous test with fakeasync', fakeAsync(() => {
      let test: boolean = false;
      setTimeout(() => {
        test = true;
        expect(test).toBeTrue();
      }, 3000);

      expect(test).toBeFalse();

      tick(1500); //satuan milisecond
      expect(test).toBeFalse();

      tick(1500);
      expect(test).toBeTrue();
    }));
  });
});

function fetchCallback(callback: (data: string) => void): void {
  setTimeout(() => {
    callback('MandiriDap');
  }, 1000);
}

function fetchPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetchCallback(resolve);
  });
}

function fetchObservable(): Observable<string> {
  return from(fetchPromise());
}

// 3. Asynchronous unit test scenario
describe('3. Asynchronous unit test scenario', () => {
  const expected = 'MandiriDap';
  describe('3.1 Test scenario for callback functions', () => {
    it(`actual should have value as ${expected}`, (done) => {
      fetchCallback((actual) => {
        expect(actual).toMatch(expected);
        done();
      });
    });
  });

  describe('3.2 Test scenario for promise functions', () => {
    it(`Promise actual should have value as ${expected}`, (done) => {
      fetchPromise().then((actual) => {
        expect(actual).toMatch(expected);
        done();
      });
    });

    it(`Promise actual should have value as ${expected}`, async () => {
      const actual = await fetchPromise();
      expect(actual).toMatch(expected);
    });
  });

  describe('3.3 Test scenario for observable functions', () => {
    it(`Subscribe actual should have value as ${expected}`, (done) => {
      fetchObservable().subscribe((actual) => {
        expect(actual).toMatch(expected);
        done();
      });
    });

    it(`Subscribe actual should have value as ${expected}`, async () => {
      const actual = await fetchObservable().toPromise();
      expect(actual).toMatch(expected);
    });
  });
});

describe('Test after, before', ()=> {
  beforeAll(()=> {
    console.log('Before All')
  })

  beforeEach(()=>{
    console.log('Before each')
  })

  afterAll(()=>{
    console.log('After All')
  })

  afterEach(()=> {
    console.log('After Each')
  })

  it('nyoba 1', ()=> {
    console.log('it 1')
  })

  it('nyoba 2', ()=> {
    console.log('it 2')
  })

  it('nyoba 3', ()=> {
    console.log('it 3')
  })
})
