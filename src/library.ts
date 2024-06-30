import _ from "./lib/lodash";

import { type Catalog, searchBooksByTitle } from "./catalog";
import {
  addMember as addMemberUser,
  type Member,
  type UserManagement,
} from "./user";

type Library = {
  catalog: Catalog;
  userManagement: UserManagement;
};

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
  userManagement: {
    librariansByEmail: {
      "franck@gmail.com": {
        email: "franck@gmail.com",
        encryptedPassword: "bXlwYXNzd29yZA==",
      },
    },
    membersByEmail: {
      "samantha@gmail.com": {
        email: "samantha@gmail.com",
        encryptedPassword: "c2VjcmV0",
        isBlocked: false,
        bookLending: [
          {
            bookItemId: "book-item-1",
            bookIsdn: "978-1779501127",
            lendingDate: "2020-04-23",
          },
        ],
      },
    },
  },
};

export const searchBooksByTitleJSON = (library: Library, query: string) => {
  const results = searchBooksByTitle(_.get(library, "catalog"), query);
  return JSON.stringify(results, null, 2);
};

export const addMember = (library: Library, member: Member): Library => {
  const currentUserManagement = _.get(library, "userManagement");
  const nextUserManagement = addMemberUser(currentUserManagement, member);
  return _.set(library, "userManagement", nextUserManagement);
};
