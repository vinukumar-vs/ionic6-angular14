import { Component } from '@angular/core';
import { AnotherStandAloneComponent } from './anotherstandalone.component';

// https://angular.io/guide/standalone-components

// this component is bootstrapped via app.module, so this example is not really showing the power of a standalone component
// it does load another standalone component, so you can see it does work nicely

@Component({
  standalone: true,
  selector: 'stand-alone',
  imports: [AnotherStandAloneComponent],
  template: `
   <h2>I am a standalone component!!</h2>

   <another-standalone-component></another-standalone-component>
  `,
})
export class StandAloneComponent {
  // component logic
}
