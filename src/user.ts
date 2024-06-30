import _ from "./lib/lodash";

import type { BookLending } from "./book";

type UserBase = {
  email: string;
  encryptedPassword: string;
};

type Librarian = UserBase;
export type Member = UserBase & {
  isBlocked: boolean;
  bookLending: BookLending[];
};

export type UserManagement = {
  librariansByEmail: Record<string, Librarian>;
  membersByEmail: Record<string, Member>;
};

export const userManagementData: UserManagement = {
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
};

export const isLibrarian = (
  userManagement: UserManagement,
  email: string
): boolean => {
  return _.has(_.get(userManagement, "librariansByEmail"), email);
};

export const isVIPMember = (
  userManagement: UserManagement,
  email: string
): boolean => {
  return _.get(userManagement, ["membersByEmail", email, "isVip"]) === true;
};

export const isSuperMember = (
  userManagement: UserManagement,
  email: string
): boolean => {
  return _.get(userManagement, ["membersByEmail", email, "isSuper"]) === true;
};

export const addMember = (
  userManagement: UserManagement,
  member: Member
): UserManagement => {
  const email = _.get(member, "email");
  const infoPath = ["membersByEmail", email];
  if (_.has(userManagement, infoPath)) {
    throw new Error("Member already exists.");
  }
  return _.set(userManagement, infoPath, member);
};
