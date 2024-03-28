import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink,CommonModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent implements OnInit {
  regform!: FormGroup;

  constructor(private form: FormBuilder) {

  
  }
  ngOnInit(): void {
   this.regform=this.form.group({
    fname:["",Validators.required,Validators.pattern("") ],
    mobile:["", Validators.required],
    email:["", Validators.required],
    dob:["", Validators.required],
    address:["", Validators.required],
    password:["", Validators.required],
    cbox:["", Validators.required]

   });
   
  }
  get Fname(){
   return this.regform.get("fname") as FormControl
  }
  
  get Mobile(){
    return this.regform.get("mobile") as FormControl
  }

  get Email(){
    return this.regform.get("email") as FormControl
  }
  
  get Dob(){
    return this.regform.get("dob") as FormControl
  }

  get Address(){
    return this.regform.get("address") as FormControl
  }

  get Password(){
    return this.regform.get("password") as FormControl
  }

  get Cbox(){
    return this.regform.get("cbox") as FormControl
  }
}

