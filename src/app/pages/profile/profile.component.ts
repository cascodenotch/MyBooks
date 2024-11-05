import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;
  public mensaje: string;

  constructor (){
    this.user =new User(1, "Catalina", "Arciniegas", "cas@gmail.com", "/assets/fotoperfil.jpg", "cas");
  }

  public mostrarNombre2 (){
    console.log(this.user.name)
  }

  public editUser(newName:string, newLastname: string, newEmail:string, newPhoto: string){
  
    if(newName != ""){
      this.user.name = newName;
      this.mensaje = "Usuario actualizado"
    }

    if (newLastname !=""){
      this.user.last_name = newLastname;
      this.mensaje = "Usuario actualizado"
    }
    
    if (newEmail != ""){
    this.user.email = newEmail; 
     this.mensaje = "Usuario actualizado"
    }

    if(newPhoto!= ""){
      this.user.photo =newPhoto;
      this.mensaje = "Usuario actualizado"
    }

    if ((newPhoto=="") && (newEmail== "")&& (newLastname=="")&& (newName== "")){
    this.mensaje = "No se detectan cambios"
    }
  }
}
