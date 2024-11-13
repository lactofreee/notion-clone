// import { getRootDocuments } from "../api/api.js";
// import { navigate, routes } from "../router/router.js";

// // 문서 목록을 가져와 동적 링크 생성
// let isListCreated = false;

// export const createDocumentsList = async () => {
//   if (isListCreated) return; // 이미 생성된 경우 실행하지 않음
//   isListCreated = true;
//   const docsJSON = await getRootDocuments();
//   docsJSON.forEach((doc) => {
//     createDocument(doc.id, doc.title, "test text");
//   });
// };
// createDocumentsList();

// // 문서 생성 및 사이드바에 링크 추가
// export const createDocument = (docId, docTitle, docContent) => {
//   const path = `/documents/${docId}`;

//   // 라우트 등록
//   routes.set(path, `<h1>${docTitle}</h1><p>${docContent}</p>`);

//   // 사이드바에 링크 추가
//   const nav = document.getElementById("sidebar__menuWrapper");
//   const link = document.createElement("a");
//   link.href = path;
//   link.innerText = docTitle;
//   link.onclick = (event) => {
//     event.preventDefault();
//     navigate(path);
//   };
//   nav.appendChild(link);

//   // 해당 경로로 이동
//   navigate(path);
// };
