import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
  public book:Book = {id_book:0,id_user:0,title:"",author:"",type:"",price:0,photo:""}
  public arrayBooks: Book[] = [];

  constructor(public bookService:BooksService, private toastr: ToastrService) {}


  guardarLibro(): void {
    this.bookService.add(this.book).subscribe({
      next: (response) => {
        this.toastr.success("Libro añadido con éxito", "", { timeOut: 2000, positionClass: 'toast-top-center' });
  
        this.bookService.getAll().subscribe({
          next: (response: any) => {
            this.arrayBooks = response.data;
          },
          error: (error) => {
            this.toastr.error('No se pudo cargar la lista de libros', '', { timeOut: 2000, positionClass: 'toast-top-center' });
          }
        });
      },
      error: (error) => {
        this.toastr.error("Error al añadir el libro", "", { timeOut: 2000, positionClass: 'toast-top-center' });
      }
    });
  }
}