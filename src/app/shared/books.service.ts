import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [
    new Book(1, 1, "Hamnet", "Tapa blanda", "Maggie O Farrel", 20, "/assets/portadahamnet.jpg"),
    new Book(2, 2, "Los peligros de fumar en la cama", "Tapa blanda", "Mariana Enriquez", 20, "assets/portadalibro.jpeg"),
    new Book(3, 3, "Imposible decir adiós", "Tapa blanda", "Han kang", 20, "/assets/portadaadios.jpg")
  ];

  constructor() { }

  public getAll(): Book[]{

    return this.books;
  }

  public getOne(id_libro: number): Book{

    for (let libro of this.books){
      if (libro.id_book == id_libro){
      return libro;
      }
    }
    return null;
  }

  public add(book: Book): void{

    this.books.push(book);

  }

  public edit(book: Book): boolean{

    for (let libro of this.books){
      if (libro.id_book == book.id_book){
        libro.id_user = book.id_user;
        libro.title = book.title;
        libro.type = book.type;
        libro.author = book.author;
        libro.price = book.price;
        libro.photo = book.photo;
        return true;
      }
    }
      return false;
  }

  public delete(id_book: number): boolean{
    
    this.books = this.books.filter(element => element.id_book!=id_book)
    return true;
    }

  }

