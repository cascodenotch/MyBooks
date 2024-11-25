import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  
  public book:Book = {Id_book:0,Id_user:0,title:"",author:"",type:"",price:0,photo:""}
  public arrayBooks: Book[] = [];

  constructor(public bookService:BooksService, private toastr: ToastrService) {}

  guardarLibro(): void {
    
    this.bookService.add(this.book).subscribe((response:Response)=>{
    if (response.codigo == 400){
      this.toastr.error("Ya existe ese libro", "", { timeOut: 2000, positionClass: 'toast-top-center' });
    } 
    if (response.codigo == 404){
      this.toastr.error("No existe ese Id de usario", "", { timeOut: 2000, positionClass: 'toast-top-center' });
    } 
    else{
      this.arrayBooks = response.data;
      this.toastr.success("Libro añadido con éxito", "", { timeOut: 2000, positionClass: 'toast-top-center' });
    }
    })
  }
  
}