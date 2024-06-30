import { addMember, libraryData, searchBooksByTitleJSON } from "./library";

const main = async () => {
  console.log(searchBooksByTitleJSON(libraryData, "Watch"));

  console.log(
    addMember(libraryData, {
      email: "add_user@test.example",
      encryptedPassword: "kafa'2hasdfiasd",
      isBlocked: false,
      bookLending: [],
    })
  );
  console.log(libraryData);
};

await main();
