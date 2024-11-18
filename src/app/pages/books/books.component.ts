import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public arrayBooks: Book[] = [];

constructor(public bookService:BooksService, private toastr: ToastrService){
  this.bookService.getAll().subscribe({
    next: (response: any) => {
      this.arrayBooks = response.data;
    },
    error: (error) => {
      this.toastr.error('No se pudo cargar la lista de libros', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
  });
}
 
close(closedBook: Book): void {
  this.bookService.delete(closedBook.id_book).subscribe({
    next: (response: any) => {
      this.arrayBooks = response.data;
    },
    error: (error) => {
      this.toastr.error('No se pudo eliminar el libro', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
  });
}

buscar(id_busqueda: number): void {
  this.bookService.getOne(id_busqueda).subscribe({
    next: (response:any) => {

      if (response.codigo==404){
        this.toastr.error('No tenemos un libro con ese id', '', { timeOut: 2000, positionClass: 'toast-top-center' });
      }
      else {this.arrayBooks = [response.data];}
    },
    error: (error) => {
      this.toastr.error('Otro error', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
  });
}
}
