import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public formRegister: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }


  public register() 
  {
    this.user = this.formRegister.value;
    // console.log (this.user);
  }

  private buildForm()
  {
    const minPassLength = 8;

    this.formRegister = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]],
    });
  }

  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

}
