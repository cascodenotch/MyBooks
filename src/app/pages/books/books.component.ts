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

public arrayBooks: Book[];
// public showAlert:boolean = false; 

constructor(public bookService:BooksService, private toastr: ToastrService){
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
    // this.showAlert = false;
  } else {
    this.arrayBooks = [];
    // this.showAlert = true; 
    this.toastr.error("No se ha encontrado el ID del libro", "", {timeOut: 2000, positionClass:'toast-top-center'});
  }
}

}
