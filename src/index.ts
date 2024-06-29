import { libraryData, searchBooksByTitleJSON } from "./library";
import {
  isLibrarian,
  isSuperMember,
  isVIPMember,
  userManagementData,
} from "./user";

const main = async () => {
  console.log(searchBooksByTitleJSON(libraryData, "Watch"));

  console.log(
    "isLibrarian(franck@gmail.com): ",
    isLibrarian(userManagementData, "franck@gmail.com")
  );
  console.log(
    "isLibrarian(samantha@gmail.com): ",
    isLibrarian(userManagementData, "samantha@gmail.com")
  );
  console.log(
    "isVIPMember: ",
    isVIPMember(userManagementData, "samantha@gmail.com")
  );
  console.log(
    "isSuperMember: ",
    isSuperMember(userManagementData, "samantha@gmail.com")
  );
};

await main();
