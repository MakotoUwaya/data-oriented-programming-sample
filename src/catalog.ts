import _ from "./lib/lodash";

import type { Book } from "./book";

type Author = {
  name: string;
  bookIsbns: string[];
};

export type Catalog = {
  booksByIsbn: Record<string, Book>;
  authorsById: Record<string, Author>;
};

export const catalogData: Catalog = {
  booksByIsbn: {
    "978-1779501127": {
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
    },
  },
  authorsById: {
    "alan-moore": {
      name: "Alan Moore",
      bookIsbns: ["978-1779501127"],
    },
    "dave-gibbons": {
      name: "Dave Gibbons",
      bookIsbns: ["978-1779501127"],
    },
  },
};

export const authorNames = (catalog: Catalog, book: Book) => {
  const authorIds = _.get(book, "authorIds") as string[];
  return _.map(authorIds, (authorId) => {
    return _.get(catalog, ["authorsById", authorId, "name"]);
  });
};

export const bookInfo = (catalog: Catalog, book: Book) => {
  return {
    title: _.get(book, "title"),
    isbn: _.get(book, "isbn"),
    authorNames: authorNames(catalog, book),
  };
};

export const searchBooksByTitle = (catalog: Catalog, query: string) => {
  const allBooks = _.values(_.get(catalog, "booksByIsbn"));
  const matchingBooks = _.filter(allBooks, (book) => {
    return _.get(book, "title").includes(query);
  });
  return _.map(matchingBooks, (book) => {
    return bookInfo(catalog, book);
  });
};
