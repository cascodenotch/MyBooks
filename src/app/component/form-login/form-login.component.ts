import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user: User = {
    Id_user: 0,          
    name: '',            
    last_name: '',       
    email: '',           
    password: '',        
    photo: ''           
  };

  submit(form: NgForm){

    console.log (form.value);
    console.log (this.user);

  }

}
