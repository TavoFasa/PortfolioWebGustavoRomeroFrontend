import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 form: FormGroup;

  constructor (private formbuilder: FormBuilder){
    this.form= this.formbuilder.group ({
      password:['',[Validators.required, Validators.minLength(8),]],
      mail:['',[Validators.required, Validators.email]]
    })
  }
 
  ngOnInit() {}
   
  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
  onEnviar(event: Event){
    event.preventDefault; if (this.form.valid){
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      this.form.markAllAsTouched(); 
    }
 
  }
}
