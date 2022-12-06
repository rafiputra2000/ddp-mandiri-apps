// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { BannerComponent } from './banner.component';
// import { CommonModule } from '@angular/common';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('5. BannerPageComponent test scenario', () => {
//   let fixture: ComponentFixture<BannerComponent>;
//   let component: BannerComponent;
//   let element: HTMLElement;
//   let debugElement: DebugElement;

//   beforeAll(() => {
//     TestBed.configureTestingModule({
//       imports: [CommonModule],
//       declarations: [BannerComponent],
//     });

//     fixture = TestBed.createComponent(BannerComponent);
//   });

//   beforeEach(() => {
//     fixture.detectChanges();
//     component = fixture.componentInstance;
//     element = fixture.nativeElement;
//   });

//   describe('5.1 Component should be initialized', () => {
//     it('component should be created', () => {
//       expect(component).toBeTruthy();
//       expect(component).toBeInstanceOf(BannerComponent);
//     });

//     it('component View Element should be created', () => {
//       expect(element).toBeTruthy();
//     });
//   });

//   describe('5.2 Component should have the required properties and tags', () => {
//     const expectedSubTitle = 'web developer';

//     it(`title should have value as ${expectedSubTitle}`, () => {
//       expect(component.subTitle).toMatch(expectedSubTitle);
//     });

//     it(`Banner application subTitle should contain value as ${expectedSubTitle}`, ()=>{
//       const banner = element.querySelector('span') as Element

//       expect(banner).toBeTruthy()
//       expect(banner.textContent).toContain(component.subTitle)
//     });

//     it('Banner aplication button should have warning classes ', () => {
//         const warning = debugElement.query(By.css('.text-warning'));
//         expect(Object.values(warning.classes)).toContain(true);
//       });

//   });
// });
