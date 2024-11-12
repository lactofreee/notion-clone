const menuWrapperDocumets = document.getElementById(
  "sidebar__menuWrapper--documets"
);

const getAllDocuments = async () => {
  const data = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    headers: {
      "x-username": "teamouse",
    },
  });
  return await data.json();
};

const displayDocsList = async () => {
  const docsInfo = await getAllDocuments();
  docsInfo.forEach((docInfo) => {
    const newDocLi = document.createElement("li");
    newDocLi.innerHTML = `<a href='' id="sidebar__menuWrapper--documentLink" data-url="doc${docInfo.id}">${docInfo.title}</a>`;
    menuWrapperDocumets.appendChild(newDocLi);
  });
};

displayDocsList();
