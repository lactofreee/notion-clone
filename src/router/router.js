import { test } from "../components/CreateNewDocument";

// API GET 요청으로 root documents tree JSON형태로 가져오기
const fetchDocumentsInfo = async () => {
  const data = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    headers: {
      "x-username": "teamouse",
    },
  });
  return await data.json();
};

// 라우트 객체 초기화
const routes = new Map();
routes.set("/", "<h1>Home</h1><p>Welcome to the Home Page</p>");

// 라우터 생성
const router = () => {
  const path = window.location.pathname;
  const content =
    routes.get(path) || "<h1>404 Not Found</h1><p>The page does not exist.</p>";
  document.getElementById("editor__body").innerHTML = content;
};

// history API 사용하여 SPA 구현
const navigate = (path) => {
  path = decodeURIComponent(path);
  window.history.pushState({}, path, window.location.origin + path);
  router();
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);

// Sidebar에 documents list 목록으로 동적 생성과 라우팅
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

test()