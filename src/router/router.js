const fetchDocumentsInfo = async () => {
  const data = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    headers: {
      "x-username": "teamouse",
    },
  });
  return await data.json();
};

// const createDocumentsArray = async () => {
//   const documents = await fetchDocumentsInfo();

//   const docsTitles = documents.map((doc) => doc.title);
//   console.log(docsTitles);
// };
// createDocumentsArray();






const routes = new Map();
routes.set("/", "<h1>Home</h1><p>Welcome to the Home Page</p>");

const router = () => {
  const path = window.location.pathname;
  const content =
    routes.get(path) || "<h1>404 Not Found</h1><p>The page does not exist.</p>";
  document.getElementById("pageView__editor").innerHTML = content;
};

const navigate = (path) => {
  path = decodeURIComponent(path);
  window.history.pushState({}, path, window.location.origin + path);
  router();
};



window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);

const createDocument = (title, content) => {
  const encodedTitle = encodeURIComponent(title);
  const path = `/documents/${encodedTitle}`;

  routes.set(path, `<h1>${title}</h1><p>${content}</p>`);

  const nav = document.getElementById("sidebar__menuWrapper");
  const link = document.createElement("a");
  link.href = path;
  link.innerText = title;
  link.onclick = function (event) {
    event.preventDefault();
    navigate(path);
  };
  nav.appendChild(link);

  // 새로 생성한 문서로 이동
  navigate(path);
};


// GET 요청으로 받은 문서 정보를 바탕으로 문서 목록 만들기
const createDocumentsList = async () => {
  const docsJSON = await fetchDocumentsInfo();
  docsJSON.forEach((doc) => {
    createDocument(doc.title, "test text")
  })
  console.log(docsJSON);
};
createDocumentsList();

