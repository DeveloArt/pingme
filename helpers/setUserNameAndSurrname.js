import React from "react";

const setUserNameAndSurname = (email) => {
  const fullName = email
    .substring(0, email.indexOf("@wakacje.pl"))
    .replace(".", " ");
  const nameIndex = email.indexOf(".");
  const surrNameIndex = email.indexOf("@");
  const name = email.substring(0, nameIndex);
  const surname = email.substring(nameIndex + 1, surrNameIndex);

  return { name, surname, fullName };
};

export default setUserNameAndSurname;
