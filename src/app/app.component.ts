import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payeeName: string = '';
  paymentDate: string = '';
  amount: number = 0;
  height: number = 0;

  car = {
    make: 'Toyota',
    model: 'RAV4'
  }

  miles: number = 0;

  onNameChange(val: string) {
    this.payeeName = val;
  }

  onDateChange(val: string) {
    this.paymentDate = val;
  }

  onAmountChange(val: string) {
    this.amount = parseFloat(val);
  }

  onHeightChange(val: string) {
    this.height = parseFloat(val);
  }

  onDistanceChange(val: string) {
    this.miles = parseFloat(val);
  }
}
