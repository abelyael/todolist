import {Component} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      hello world
      {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {

  title = 'Hello everyone';

  constructor() {
    setTimeout(() => {
      this.changeTitle  ('lalala');
    }, 1000);
    setTimeout(() => {
      this.changeTitle('fun');
    }, 2000);
    this.changeTitle('My First Angular App')  ;
  }

  ngOnInit() {
//    this.title = this.title + ' started '
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }


}
