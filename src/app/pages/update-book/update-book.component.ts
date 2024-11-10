import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public showAlert: boolean = false; 
  public mensajeAlerta: string = "";

  constructor(public bookService:BooksService) {}

  modificarLibro(newIDBook:number, newIDUser: number, newTitle:string, newType: string, newAuthor:string, newPrice:number, newPhoto:string)
  {
    let editado = new Book (newIDBook, newIDUser, newTitle, newType,newAuthor, newPrice,newPhoto);
    let resultado = this.bookService.edit(editado);

    if (resultado == true){
      this.showAlert = true; 
      this.mensajeAlerta = "Libro editado correctamente";
    }
    else{
      this.showAlert = true; 
      this.mensajeAlerta = "No se ha encontrado el ID del libro";
    }
    
  }

}
