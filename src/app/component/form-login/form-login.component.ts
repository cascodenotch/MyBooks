import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private usersService:UsersService, 
    private router: Router,
    private toastr: ToastrService ){}

  submit(form: NgForm){

    this.user = form.value;

    this.usersService.login(this.user).subscribe((response: any) => {

      if (response.codigo == 200){
        console.log('Usuario logueado con éxito');
        this.toastr.success('Has iniciado sesión correctamente', 'Bienvenido');
        this.usersService.logueado = true; 
        this.usersService.user = response.data;
        this.router.navigate(['/books']);
      }

      if (response.codigo == 401){
        console.log('Contraseña incorrecta');
        this.toastr.error('La contraseña es incorrecta', 'Ups');
        this.usersService.logueado = false; 
      }
      
      if (response.codigo == 404){
        console.log('Correo no encontrado');
        this.toastr.error('No encontramos un usuario con ese correo', 'Ups');
        this.usersService.logueado = false; 
      }

      });
  }
}
