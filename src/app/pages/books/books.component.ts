import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public arrayBooks: Book[] = [];
public usuario_logueado: User;
public id_logueado : number;

constructor(public bookService:BooksService, public userService: UsersService, private toastr: ToastrService){

  this.usuario_logueado = this.userService.user;
  this.id_logueado = this.usuario_logueado.Id_user;

  this.bookService.getBooksByUser(this.id_logueado).subscribe((response: Response) => {
    if (response.codigo !== 404) {
      this.arrayBooks = response.data; 
    }
  });

}

close(book: Book): void {
  this.bookService.delete(book.Id_book).subscribe((response: Response) => {
   
    if (response.codigo == 404) {
      this.toastr.error('No se pudo eliminar el libro', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    } else {
      this.arrayBooks = response.data;
      this.toastr.success('¡Libro eliminado con éxito!', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
  });
}

buscar(id_busqueda: number, id_logueado: number): void {

  const bookId = Number(id_busqueda);

  if (!bookId) {
    this.toastr.error('Ups, parece que no has escrito un ID válido.', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    return;
  }

  this.bookService.getBooksByUserAndId(bookId, id_logueado).subscribe((response: any) => {

    if (response.codigo==404){
      this.toastr.error('No encontramos ningún libro con ese ID.', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
    else {
      this.arrayBooks = [response.data];
      this.toastr.success('¡Aquí tienes tu libro!', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
  });
}

}
