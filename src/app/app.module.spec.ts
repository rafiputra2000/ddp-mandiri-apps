import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('4. Angular module test scenario', () => {
  let fixture: ComponentFixture<AppComponent>
  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(AppComponent)
  });

  xdescribe('4.1 AppModule should be initialized', () => {
    it('AppModule should be initialized', () => {
      const module: AppModule = TestBed.inject(AppModule);

      expect(module).toBeTruthy();
      expect(module).toBeInstanceOf(AppModule);
    });
  });

  describe('4.2 AppModule should be initialized', () => {
    it('should be initialized', () => {
      const component: AppComponent = fixture.componentInstance

      expect(component).toBeTruthy()
      expect(component).toBeInstanceOf(AppComponent)

    });
  });

  describe('4.3 AppComponent should have router-outlet', ()=>{
    it('should have router-outlet', ()=> {
        const element: HTMLElement = fixture.nativeElement
        expect(element.querySelector('router-outlet')).toBeTruthy()
    })
  })
});
