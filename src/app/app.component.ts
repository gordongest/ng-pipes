import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payeeName: string = '';
  paymentDate: string = '';

  onNameChange(val: string) {
    this.payeeName = val;
  }

  onDateChange(val: string) {
    this.paymentDate = val;
  }
}
