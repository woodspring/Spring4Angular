import { Customer } from './customer';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'Spring4Angular Customer';
  public theForm: FormGroup;
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService
              /*private _fb: FormBuilder*/
            ) {}

   getCustomers() {
    return this.dataService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
 /*   this.theForm = this._fb.group( {
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]]
     } );
 * */
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }

  save(model: Customer) {
    console.log(model);
  }
}
