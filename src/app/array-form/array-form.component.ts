import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],  // Example of a simple form control
      contacts: this.fb.array([])        // FormArray initialized as empty
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get contacts(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  addContact() {
    const contactFormGroup = this.fb.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.contacts.push(contactFormGroup);
  }

  removeContact(index: number) {
    this.contacts.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
