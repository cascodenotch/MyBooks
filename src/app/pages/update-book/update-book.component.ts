import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

public book:Book = {Id_book:0,Id_user:0,title:"",author:"",type:"",price:0,photo:""}
public arrayBooks: Book[] = [];

constructor(public bookService:BooksService, private toastr: ToastrService) {}

modificarLibro(newIDBook:string, newIDUser: string, newTitle:string, newType: string, newAuthor:string, newPrice:string, newPhoto:string)
  {
    let editado = new Book (Number.parseInt(newIDBook), Number.parseInt(newIDUser), newTitle, newType,newAuthor, Number.parseInt(newPrice),newPhoto);
    
    this.bookService.edit(editado).subscribe((response:any)=>{
      console.log(response)
       if (response.codigo==404){
        this.toastr.error('No existe un libro con ese Id', '', { timeOut: 2000, positionClass: 'toast-top-center' });
       }
       else {this.arrayBooks = [response.data];
        this.toastr.success('Libro modificado con éxito', '', { timeOut: 2000, positionClass: 'toast-top-center' });
       }
    }) 
}

}
