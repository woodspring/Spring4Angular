import { Customer } from '../entity/customer.interface';
import { CustomerService } from '../service/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = {firstname: '', lastname: '', email: '', features: {address: '', country: '', region: '', price: 0.00}};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  oSubmit() {
    this.customerService.createCustomer(this.customer).subscribe(
      value => {
        console.log('[POST] create Customer successfully', value);
      }, error => {
        console.log('FAIL to create Customer!');
      },
      () => {
        console.log('POST customer - now completed');
      } );
  }

}
