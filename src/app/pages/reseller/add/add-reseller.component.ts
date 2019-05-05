import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Reseller } from '../../../models/reseller';

@Component({
  selector: 'app-add-reseller',
  templateUrl: './add-reseller.component.html',
  styles: []
})
export class AddResellerComponent implements OnInit {
  public reseller: Reseller;
  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.reseller = new Reseller(0, '', '', '', '', '', 0, true, '', '');
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
      ]),
      document: new FormControl('', Validators.required),
      phone: new FormControl(''),
      password_confirmation: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      minimum_value: new FormControl('', Validators.required),
      bonus: new FormControl('', Validators.required),
    });
    console.log(this.myForm.controls['name']);
  }
  
  onSubmit(): void {
    console.log('submit');
    console.log(this.myForm);
    console.log(this.myForm.value);
  }
}
