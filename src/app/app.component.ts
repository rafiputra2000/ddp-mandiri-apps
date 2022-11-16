import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //perbedaan template dan templateUrl, jika template saja maka memanggil tag htmlnya
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ddp-mandiri-apps';
}

// @Component({
//   selector: 'app-root',
//   template: '<h1>Haloo</h1> <p>hallo</p> <h2>HELLLLOOOOOO</h2>', //perbedaan template dan templateUrl, jika template saja maka memanggil tag htmlnya
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ddp-mandiri-apps';
// }

