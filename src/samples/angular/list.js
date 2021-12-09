import { Component } from '@angular/core'

@Component({
  selector: 'app-list',
  template: `
    <ul class="divide-y divide-gray-100">
      <ng-content></ng-content>
    </ul>
  `,
})

export class ListComponent {}
