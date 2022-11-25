import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badgeCustom'
})
export class BadgeCustomPipe implements PipeTransform {

  transform(value: boolean): string {
    let badgeClass: string = 'bg-warning';
    let txtBadge: string = '';
    if (value) {
      badgeClass = 'bg-success';
      txtBadge = 'Todo selesai dilakukan';
    } else {
      txtBadge = 'Todo masih dalam proses';
    }
    return `<span class="badge text-${badgeClass}">${txtBadge}</span>`;
  }
}
