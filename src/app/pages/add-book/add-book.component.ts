import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
  public book:Book = {Id_book:0,Id_user:0,title:"",author:"",type:"",price:0,photo:""}
  public arrayBooks: Book[] = [];

  public usuario_logueado: User;
  public id_logueado : number;

  constructor(public bookService:BooksService, public userService: UsersService, private toastr: ToastrService) {}

  guardarLibro(): void {

    this.usuario_logueado = this.userService.user;
    this.id_logueado = this.usuario_logueado.Id_user;
    this.book.Id_user = this.id_logueado;
    
    this.bookService.add(this.book).subscribe((response:Response)=>{
    
      this.arrayBooks = response.data;
      console.log(response.data);
      this.toastr.success("¡Libro añadido con éxito!", "", { timeOut: 2000, positionClass: 'toast-top-center' });
    
    })
  }
  
}