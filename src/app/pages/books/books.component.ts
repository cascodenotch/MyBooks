import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

public book: Book; 
public book2: Book;
public book3: Book;
public arrayBooks: Book[];

constructor(){

  this.book = new Book (0,0, "Hamnet", "Tapa blanda", "Maggie O Farrel", 20, "/assets/portadahamnet.jpg");
  this.book2 = new Book (0,0, "Los peligros de fumar en la cama", "Tapa blanda", "Mariana Enriquez", 20, "assets/portadalibro.jpeg");
  this.book3 = new Book (0,0, "Imposible decir adiós", "Tapa blanda", "Han kang", 20, "/assets/portadaadios.jpg");
  this.arrayBooks=[this.book, this.book2, this.book3];

}

guardarLibro(newIDBook:number, newIDUser: number, newTitle:string, newType: string, newAuthor:string, newPrice:number, newPhoto:string){

  let nuevoLibro = new Book (newIDBook, newIDUser, newTitle, newType, newAuthor, newPrice, newPhoto);
  this.arrayBooks.push(nuevoLibro);
  console.log (this.arrayBooks);
}

}
