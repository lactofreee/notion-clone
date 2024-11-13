// import { postNewDocument } from "../api/api.js";

// // 문서 목록을 관리할 요소 선택
// const documentList = document.getElementById("sidebar__menuWrapper");

// // Root Document 생성 버튼
// const createDocumentButton = document.getElementById(
//   "sidebar__createDocument--button"
// );

// // 새 페이지 버튼에 이벤트 리스너 추가
// createDocumentButton.addEventListener("click", () => {
//   addRootDoc();
// });

// // Root Document 생성
// const addRootDoc = async () => {
//   try {
//     const newDocument = await postNewDocument("제목 없음");

//     const newDocumentItem = document.createElement("li");
//     newDocumentItem.classList.add("sidebar__menuWrapper--document");

//     newDocumentItem.innerHTML = `
//       <a href="#" class="document-link" data-url="doc${newDocument.id}">
//         ${newDocument.title}
//         <button onclick="addDoc(${newDocument.id})">+</button>
//       </a>
//       <ul class="sub-document-list"></ul>
//     `;

//     documentList.appendChild(newDocumentItem);

//     newDocumentItem.querySelector(".document-link").click();
//   } catch (error) {
//     console.error("새 페이지 생성 실패:", error);
//     alert("페이지 생성에 실패했습니다.");
//   }
// };

// // 하위 페이지 생성
// const addDoc = async (parentId) => {
//   const parentElement = document.querySelector(`[data-url="doc${parentId}"]`);
//   const subDocumentList = parentElement.nextElementSibling; // `<ul>` 요소

//   try {
//     const newDocument = await postNewDocument("제목 없음", parentId);

//     const newDocumentItem = document.createElement("li");
//     newDocumentItem.classList.add("sidebar__menuWrapper--document");

//     newDocumentItem.innerHTML = `
//       <a href="#" class="document-link" data-url="doc${newDocument.id}">
//         ${newDocument.title}
//         <button onclick="addDoc(${newDocument.id})">+</button>
//       </a>
//       <ul class="sub-document-list"></ul>
//     `;

//     subDocumentList.appendChild(newDocumentItem);

//     newDocumentItem.querySelector(".document-link").click();
//   } catch (error) {
//     console.error("새 페이지 생성 실패:", error);
//     alert("페이지 생성에 실패했습니다.");
//   }
// };
