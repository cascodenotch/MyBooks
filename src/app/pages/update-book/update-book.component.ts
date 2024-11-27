import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

public book:Book = {Id_book:0,Id_user:0,title:"",author:"",type:"",price:0,photo:""}
public arrayBooks: Book[] = [];

public usuario_logueado: User;
public id_logueado : number;

constructor(public bookService:BooksService, public userService: UsersService, private toastr: ToastrService) {}

modificarLibro(newIDBook:string, newTitle:string, newType: string, newAuthor:string, newPrice:string, newPhoto:string)
  {

    this.usuario_logueado = this.userService.user;
    this.id_logueado = this.usuario_logueado.Id_user;
    this.book.Id_user = this.id_logueado;
    
    let editado = new Book (Number.parseInt(newIDBook), this.id_logueado, newTitle, newType,newAuthor, Number.parseInt(newPrice),newPhoto);
    
    this.bookService.edit(editado).subscribe((response:any)=>{
      console.log(response)
       if (response.codigo==404){
        this.toastr.error('Revisa que el ID del libro sea correcto', '', { timeOut: 2000, positionClass: 'toast-top-center' });
       }
       else {
        this.arrayBooks = [response.data];
        this.toastr.success('Libro modificado con éxito', '', { timeOut: 2000, positionClass: 'toast-top-center' });
       }
    }) 
}

}
