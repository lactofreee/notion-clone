import { createDocumentsList } from "./components/DocumentManager.js";
import { router } from "./router/router.js";

// 문서 목록 불러오기 및 초기화
document.addEventListener("DOMContentLoaded", () => {
  // 초기 라우팅 설정
  router();

  // 문서 목록 생성
  createDocumentsList();
});
