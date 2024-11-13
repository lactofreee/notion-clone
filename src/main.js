import { createDocumentsList } from "./components/DocumentManager.js";
import { setEventListener } from "./listeners/eventListeners.js";
import { router } from "./router/router.js";
import { initializeEditor } from "./components/Editor.js";

// 문서 목록 불러오기 및 초기화
document.addEventListener("DOMContentLoaded", () => {

  // 문서 목록을 관리할 요소 선택
  const documentList = document.getElementById("sidebar__menuWrapper");
  const createDocumentButton = document.getElementById(
    "sidebar__createDocument--button"
  );

  // 초기 라우팅 설정
  router();

  // 이벤트 리스너 설정
  setEventListener(documentList, createDocumentButton);
  
  // 문서 목록 생성
  createDocumentsList();

  // 에디터 초기화 추가
  initializeEditor();
});
