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
public showAlert:boolean = false; 

constructor(public bookService:BooksService){
  this.arrayBooks = this.bookService.getAll()
}

close(closedBook:Book){

this.bookService.delete(closedBook.id_book);
this.arrayBooks = this.bookService.getAll();

}

buscar (id_busqueda: number){

let libroEncontrado = this.bookService.getOne(id_busqueda);

  if (libroEncontrado != null) {
    this.arrayBooks = [libroEncontrado]; 
    this.showAlert = false;
  } else {
    this.arrayBooks = [];
    this.showAlert = true; 
  }
}

}
