import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User = {
    Id_user: 0,
    name: '',
    last_name: '',
    email: '',
    password: '',
    photo: ''
  };

  public mensaje: string;

  constructor(private usersService: UsersService,private toastr: ToastrService) {
      this.usersService.getUser().subscribe({
        next: (response: any) => {
          this.user = response.data;
        },
        error: (err) => {
          console.error('Error al cargar el usuario logueado:', err);
        }
      });
  }

  public editUser(newName: string, newLastname: string, newEmail: string, newPhoto: string) {
    
    let user = this.usersService.user; 
  
    user.name = newName;
    user.last_name = newLastname;
    user.email = newEmail;
    user.photo = newPhoto

    console.log('Datos enviados:', user);

    this.usersService.edit(user).subscribe({
      next: (response) => {
        console.log('Usuario modificado con éxito', response);
        this.toastr.success('Tus datos se han actualizado correctamente!');
        this.user = user;
      },
      error: (err) => {
        console.error('Error al modificar usuario:', err);

    }})
}
}
