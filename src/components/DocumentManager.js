import { fetchDocumentsInfo } from "../api/api.js";
import { navigate, routes } from "../router/router.js";

// 문서 목록을 가져와 동적 링크 생성
export const createDocumentsList = async () => {
  const docsJSON = await fetchDocumentsInfo();
  docsJSON.forEach((doc) => {
    createDocument(doc.id, doc.title, "test text")
  })
};
createDocumentsList();

// 문서 생성 및 사이드바에 링크 추가
export const createDocument = (id, title, content) => {
  const path = `/documents/${id}`;
  
  // 라우트 등록
  routes.set(path, `<h1>${title}</h1><p>${content}</p>`);

  // 사이드바에 링크 추가
  const nav = document.getElementById("sidebar__menuWrapper");
  const link = document.createElement("a");
  link.href = path;
  link.innerText = title;
  link.onclick = function (event) {
    event.preventDefault();
    navigate(path);
  };
  nav.appendChild(link);

  // 해당 경로로 이동
  navigate(path);
};