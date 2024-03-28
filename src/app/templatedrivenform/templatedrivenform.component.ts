import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent implements OnInit {
  regform!: FormGroup;

  constructor(private form: FormBuilder) {


  }
  ngOnInit(): void {
    this.regform = this.form.group({
      fname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[A-Z].*")]),
      mobile: new FormControl("", [Validators.required,Validators.maxLength(10), Validators.pattern("[0-9]*")]),
      email: new FormControl("",[ Validators.required, Validators.email]),
      dob: ["", Validators.required],
      address: ["", Validators.required],
      password: new FormControl("",[ Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$')]),
      cbox: ["", Validators.required]

    });

  }
  get Fname(): FormControl {
    return this.regform.get("fname") as FormControl
  }

  get Mobile(): FormControl {
    return this.regform.get("mobile") as FormControl
  }

  get Email(): FormControl {
    return this.regform.get("email") as FormControl
  }

  get Dob() {
    return this.regform.get("dob") as FormControl
  }

  get Address() {
    return this.regform.get("address") as FormControl
  }

  get Password() {
    return this.regform.get("password") as FormControl
  }

  get Cbox() {
    return this.regform.get("cbox") as FormControl
  }
}

