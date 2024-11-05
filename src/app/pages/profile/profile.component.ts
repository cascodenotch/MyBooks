import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;

  constructor (){
    this.user =new User(1, "Catalina", "Arciniegas", "cas@gmail.com", "cas", "cas");
  }

  public mostrarNombre2 (){
    console.log(this.user.name)
  }

  public editUser(newName:string, newLastname: string, newEmail:string){

    if(newName != ""){
      this.user.name = newName;
    }

    if (newLastname !=""){
      this.user.last_name = newLastname;
    }
    
    if (newEmail != ""){
    this.user.email = newEmail; 
    }
  }
}
