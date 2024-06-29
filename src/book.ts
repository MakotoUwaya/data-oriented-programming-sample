export type BookItem = {
  id: string;
  libId: string;
  isLent: boolean;
};

export type Book = {
  isbn: string;
  title: string;
  publicationYear: number;
  authorIds: string[];
  bookItems: BookItem[];
};

export type BookLending = {
  bookItemId: string;
  bookIsdn: string;
  lendingDate: string;
};

export const watchmenBook: Book = {
  isbn: "978-1779501127",
  title: "Watchmen",
  publicationYear: 1987,
  authorIds: ["alan-moore", "dave-gibbons"],
  bookItems: [
    {
      id: "book-item-1",
      libId: "nyc-central-lib",
      isLent: true,
    },
    {
      id: "book-item-2",
      libId: "nyc-central-lib",
      isLent: false,
    },
  ],
};
