import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public arrayBooks: Book[] = [];

constructor(public bookService:BooksService, private toastr: ToastrService){

  this.bookService.getAll().subscribe((response: Response) => {
    if (response.codigo == 200) {  
      this.arrayBooks = response.data; 
    }
  });

}

close(book: Book): void {
  this.bookService.delete(book.id_book).subscribe((response: Response) => {
    if (response.codigo==404){
      this.toastr.error('Error', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
    else {this.arrayBooks = response.data;}
  });
}

buscar(id_busqueda: number): void {
  this.bookService.getOne(id_busqueda).subscribe((response: any) => {
    if (response.codigo==404){
      this.toastr.error('No tenemos un libro con ese id', '', { timeOut: 2000, positionClass: 'toast-top-center' });
    }
    else {this.arrayBooks = [response.data];}
  });
}

}
