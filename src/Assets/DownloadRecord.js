import { jsPDF } from "jspdf";

export const downloadCategory = (props) => {
  const document = new jsPDF();
  document.setFontSize(25).text("Film Category", 65, 20);
  document
    .setFontSize(14)
    .text(`ID Number: ${props.category.categoryId}`, 10, 30);
  document
    .setFontSize(14)
    .text(`Category Name: ${props.category.categoryName}`, 10, 50);
  document.save(`${props.category.categoryName}.pdf`);
};

export const downloadAllCategories = (category) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Film Category", 65, 20);

  category.map((film) => {
    if (idY > 250 || nameY > 250) {
      idY = 30;
      nameY = 40;
      document.addPage();
    }
    document.setFontSize(12).text(`ID Number: ${film.categoryId}`, 10, idY);
    document
      .setFontSize(12)
      .text(`Category Name: ${film.categoryName}`, 10, nameY);
    idY = idY + 30;
    nameY = nameY + 30;
  });
  document.save(`All Categories.pdf`);
};

export const downloadCertificate = (props) => {
  const document = new jsPDF();
  document.setFontSize(25).text("Film Certificate", 65, 20);
  document
    .setFontSize(14)
    .text(`ID Number: ${props.certificate.certificateId}`, 10, 30);
  document
    .setFontSize(14)
    .text(`Certificate Name: ${props.certificate.certificateName}`, 10, 50);
  document.save(`${props.certificate.certificateName}.pdf`);
};

export const downloadAllCertificates = (certificate) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Film Certificate", 65, 20);

  certificate.map((c) => {
    if (idY > 250 || nameY > 250) {
      idY = 30;
      nameY = 40;
      document.addPage();
    }
    document.setFontSize(12).text(`ID Number: ${c.certificateId}`, 10, idY);
    document
      .setFontSize(12)
      .text(`Certificate Name: ${c.certificateName}`, 10, nameY);
    idY = idY + 30;
    nameY = nameY + 30;
  });
  document.save(`All Certificates.pdf`);
};

export const downloadMember = (membersInfo) => {
  const {
    memberId,
    dateJoined,
    title,
    firstName,
    lastName,
    dateOfBirth,
    addressPostCode,
    addressTownVillage,
    addressStreet,
    telephoneNumber,
    additionalNotes,
  } = membersInfo;

  const document = new jsPDF();
  let x = 10;
  let y = 30;
  document.setFontSize(25).text("Members", 65, 20);

  for (const value in membersInfo) {
    document.setFontSize(12).text(`${value}: ${membersInfo[value]}`, 10, y);
    y = y + 8;
  }

  document.save(`${title + " " + firstName + " " + lastName}.pdf`);
};

export const downloadAllMembers = (members) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Members", 65, 20);

  members.map((m) => {
    for (const value in m) {
      document.setFontSize(12).text(`${value}: ${m[value]}`, 10, idY);
      idY = idY + 7;
    }
    document.addPage();
    idY = 30;
    nameY = 40;
  });
  document.save(`All Members.pdf`);
};

export const downloadCopy = (copyInfo) => {
  const document = new jsPDF();
  let x = 10;
  let y = 30;
  document.setFontSize(25).text("Copy: " + copyInfo.copyId, 65, 20);

  for (const value in copyInfo) {
    document.setFontSize(12).text(`${value}: ${copyInfo[value]}`, 10, y);
    y = y + 8;
  }

  document.save(`${copyInfo.copyId} - ${copyInfo.titleName}.pdf`);
};

export const downloadAllCopies = (copies) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Copies", 65, 20);

  copies.map((c) => {
    for (const value in c) {
      document.setFontSize(12).text(`${value}: ${c[value]}`, 10, idY);
      idY = idY + 7;
    }
    document.addPage();
    idY = 30;
    nameY = 40;
  });
  document.save(`All Copies.pdf`);
};

export const downloadRental = (rentalInfo) => {
  const document = new jsPDF();
  let x = 10;
  let y = 30;
  document.setFontSize(25).text("Rental ID: " + rentalInfo.rentalId, 65, 20);

  for (const value in rentalInfo) {
    document.setFontSize(12).text(`${value}: ${rentalInfo[value]}`, 10, y);
    y = y + 8;
  }

  document.save(
    `Rental ID  (${rentalInfo.rentalId})  - ${rentalInfo.title} ${rentalInfo.firstName} ${rentalInfo.lastName}.pdf`
  );
};

export const downloadAllRentals = (rentals) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Rentals", 65, 20);

  rentals.map((r) => {
    for (const value in r) {
      document.setFontSize(12).text(`${value}: ${r[value]}`, 10, idY);
      idY = idY + 7;
    }
    document.addPage();
    idY = 30;
    nameY = 40;
  });
  document.save(`All Rentals.pdf`);
};

export const downloadTitle = (titleInfo) => {
  const document = new jsPDF();
  let x = 10;
  let y = 30;
  document.setFontSize(25).text("Title ID: " + titleInfo.titleId, 65, 20);

  for (const value in titleInfo) {
    document.setFontSize(12).text(`${value}: ${titleInfo[value]}`, 10, y);
    y = y + 8;
  }

  document.save(
    `Title ID  (${titleInfo.titleId})  - ${titleInfo.titleName}.pdf`
  );
};

export const downloadAllTitles = (titles) => {
  let idY = 30;
  let nameY = 40;

  const document = new jsPDF();
  document.setFontSize(25).text("All Titles", 65, 20);

  titles.map((t) => {
    for (const value in t) {
      document.setFontSize(12).text(`${value}: ${t[value]}`, 10, idY);
      idY = idY + 7;
    }
    document.addPage();
    idY = 30;
    nameY = 40;
  });
  document.save(`All Titles.pdf`);
};
