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

  // public showAlert:boolean = false;

  constructor(public bookService:BooksService, private toastr: ToastrService) {}

  guardarLibro(newIDBook:number, newIDUser: number, newTitle:string, newType: string, newAuthor:string, newPrice:number, newPhoto:string)
  {

    this.bookService.add(new Book(newIDBook, newIDUser, newTitle, newType,newAuthor, newPrice,newPhoto));
    // this.showAlert = true; 
    this.toastr.success("Libro añadido con éxito", "", {timeOut: 2000, positionClass:'toast-top-center'});
    
  }

}
