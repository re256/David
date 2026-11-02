class Book {
    constructor( public title: string, private _stock: number) {}
    get stock(): number {return this._stock;}

    borrowBook(): void {
        if (this._stock <= 0) {
            throw new Error(`stok buku "${this.title}" habis!`);
        }
        this._stock--;
    }

    returnBook(): void {
        this._stock++;
    }
  }

  class Member {
    private borrowedBooks: Book[] = [];

    constructor(
        public name: string, public studentId: string
    ) {}

    borrow(book: Book): void {
        if (this.borrowedBooks.length >= 3) {
            throw new Error(`[gagal] ${this.name} sudah meminjam batas maksismal (3 buku).`)
        }
    
        book.borrowBook();
    
        this.borrowedBooks.push(book);
        console.log(`[Berhasil] ${this.name} meminjam buku "{book.title}".`);
      }

      returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index === -1) {
            console.log(`[gagal] ${this.name} tidak sedang meminjam buku "${book.title}".`)
            return;
        }

        this.borrowedBooks.splice(index, 1);

        book.returnBook();
        console.log(`[Berhasil] ${this.name} mengembalikan buku "${book.title}".`);
      }
  }

const book1 = new Book("Laskar Pelangi", 2);
const book2 = new Book("Bumi Manusia", 1);
const book3 = new Book("Filosofi Teras", 3);

const member1 = new Member("David", "M001");
const member2 = new Member("Revaldo", "M002");

console.log("--- SKENARIO PEMINJAMAN ---");
member1.borrow(book1);
member1.borrow(book2);
member1.borrow(book3);

try {
  member1.borrow(book1);
} catch (error: any) {
  console.log(error.message);
}

console.log("\n--- SKENARIO STOK HABIS ---");

try {
  member2.borrow(book2);
} catch (error: any) {
  console.log(error.message);
}
console.log("\n--- SKENARIO PENGEMBALIAN ---");

member1.returnBook(book2);
member2.borrow(book2);

  
