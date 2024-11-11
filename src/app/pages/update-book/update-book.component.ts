import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  // public showAlert: boolean = false; 
  // public mensajeAlerta: string = "";

  constructor(public bookService:BooksService, private toastr: ToastrService) {}

  modificarLibro(newIDBook:number, newIDUser: number, newTitle:string, newType: string, newAuthor:string, newPrice:number, newPhoto:string)
  {
    let editado = new Book (newIDBook, newIDUser, newTitle, newType,newAuthor, newPrice,newPhoto);
    let resultado = this.bookService.edit(editado);

    if (resultado == true){
      // this.showAlert = true; 
      // this.mensajeAlerta = "Libro editado correctamente";
      this.toastr.success("Libro editado con éxito", "", {timeOut: 2000, positionClass:'toast-top-center'});
    }
    else{
      // this.showAlert = true; 
      // this.mensajeAlerta = "No se ha encontrado el ID del libro";
      this.toastr.error ("No se ha encontrado el ID del libro", "", {timeOut: 2000, positionClass:'toast-top-center'});
    }
    }
    
}
