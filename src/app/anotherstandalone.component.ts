import { Component } from '@angular/core';

// https://angular.io/guide/standalone-components

@Component({
  standalone: true,
  selector: 'another-standalone-component',
  imports: [],
  template: `
   <b>I am a standalone component within the standalone component</b>
  `,
})
export class AnotherStandAloneComponent {
  // component logic
}
