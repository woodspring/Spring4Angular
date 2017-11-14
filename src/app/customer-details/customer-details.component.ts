import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {enableProdMode, Input } from '@angular/core';
enableProdMode();


@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  { // implements OnInit {

  @Input() customer: Customer;
  // constructor() { }

  // ngOnInit() {
  // }

}
