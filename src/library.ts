import _ from "lodash";
// FIXME: Set Lodash so that the signatures of immutable and mutable functions are the same.
// import fp from "lodash/fp";

import { type Catalog, searchBooksByTitle } from "./catalog";

type Library = {
  catalog: Catalog;
};

// FIXME: Set Lodash so that the signatures of immutable and mutable functions are the same.
// const _ = fp.convert({
//   cap: false,
//   curry: false,
//   fixed: false,
//   immutable: true,
//   rearg: false,
// });

export const libraryData: Library = {
  catalog: {
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
  },
};

export const searchBooksByTitleJSON = (library: Library, query: string) => {
  const results = searchBooksByTitle(_.get(library, "catalog"), query);
  return JSON.stringify(results, null, 2);
};
