import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public arrayBooks: Book[];

constructor(public bookService:BooksService){
  this.arrayBooks = this.bookService.getAll()
}

close(closedBook:Book){

this.bookService.delete(closedBook.id_book);
this.arrayBooks = this.bookService.getAll();

}

buscar (id_busqueda: number){

  if (id_busqueda == null ){
    this.arrayBooks = this.bookService.getAll();
  }
  
  else {
    let librobuscado = this.bookService.getOne(id_busqueda);
    this.arrayBooks = [librobuscado];
  }

}
}
