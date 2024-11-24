import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public formRegister: FormGroup;
  public user: User;

  constructor(
    private formBuilder: FormBuilder, 
    private usersService:UsersService, 
    private toastr: ToastrService ) 
  { 
    this.buildForm();
  }

  private buildForm()
  {
    const minPassLength = 8;

    this.formRegister = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      password2:[,[Validators.required, this.checkPasswords]],
    });
  }

  private checkPasswords(control: AbstractControl)
  {
    let resultado = {noMatch: true};

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  public register() 
  {

  const password2Control = this.formRegister.get('password2');
  if (password2Control && password2Control.errors && password2Control.errors.noMatch){
  console.error('Las contraseñas no coinciden');
  }

    this.user = this.formRegister.value;

    this.usersService.register(this.user).subscribe({
      next: (response) => {
        console.log('Usuario registrado con éxito', response);
        this.toastr.success('Usuario registrado con éxito', 'Éxito');
      },
      error: (err) => {
        console.error('Error al registrar el usuario:', err);

    }})
  }

}
