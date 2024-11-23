import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

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

  constructor(private usersService: UsersService) {
    if (this.usersService.user.Id_user > 0) {  // Asegúrate de que Id_user tenga un valor válido
      this.usersService.getUser().subscribe({
        next: (response: any) => {
          this.user = response.data;
        },
        error: (err) => {
          console.error('Error al cargar el usuario logueado:', err);
        }
      });
    } else {
      console.error("El ID del usuario no es válido");
    }
  }

  public editUser(newName:string, newLastname: string, newEmail:string, newPhoto: string){

    this.user.name = newName;
    this.user.last_name = newLastname;
    this.user.email = newEmail;
    this.user.photo = newPhoto;

    this.usersService.edit(this.user).subscribe({
      next: (response) => {
        console.log('Usuario modificado con éxito', response);
      },
      error: (err) => {
        console.error('Error al modificar usuario:', err);

    }})
}
}
