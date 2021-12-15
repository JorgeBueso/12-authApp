import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

 
  miFormulario: FormGroup = this.fb.group({
    name:['est1', [Validators.required]],
    email:['est1@gmial1.com', [Validators.required, Validators.email]],
    password:['123', [Validators.required, Validators.minLength(3)]]
  }) ;
  
  constructor( private fb: FormBuilder,
    private router: Router) { }

  registro(){
     console.log(this.miFormulario.value)
     console.log(this.miFormulario.valid)
     this.router.navigateByUrl('/dashboard')
  } 

}