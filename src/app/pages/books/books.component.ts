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
    next: (books: Book[]) => {
      this.arrayBooks = books; 
    }
  })
}
 
close(closedBook: Book): void {
  this.bookService.delete(closedBook.id_book).subscribe({
    next: () => {
      this.bookService.getAll().subscribe({
        next: (books: Book[]) => {
          this.arrayBooks = books;  
        }
      });
      this.toastr.success('Libro eliminado', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    },
  });
}

buscar(id_busqueda: number): void {
  this.bookService.getOne(id_busqueda).subscribe({
    next: (libroEncontrado: Book) => {
      if (libroEncontrado) {
        this.arrayBooks = [libroEncontrado];
      } else {
        this.arrayBooks = []; 
        this.toastr.error('No se ha encontrado el ID del libro', '', { timeOut: 2000, positionClass: 'toast-top-center' });
      }
    },
  });

}

}
