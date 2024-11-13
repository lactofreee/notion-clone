// URL
const BASE_URL = "https://kdt-api.fe.dev-cos.com/documents";

const createDocumentPage = async (title, parentId = null) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "x-username": "teamouse",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        parent: parentId,
      }),
    });

    if (!response.ok) {
      throw new Error("Document 생성에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("Document 생성 중 오류 발생:", error);
    throw error;
  }
};

//문서 목록을 관리할 요소 선택
const documentList = document.getElementById("sidebar__menuWrapper");
// 새 페이지 버튼에 이벤트 리스너 추가
const createDocumentButton = document.getElementById(
  "sidebar__createDocument--button"
);
// Root Document 생성
const addRootDoc = async () => {
  try {
    // 새 문서 생성 API 호출
    const newDocument = await createDocumentPage("제목 없음");

    // 새로운 문서 항목 생성
    const newDocumentItem = document.createElement("li");
    newDocumentItem.classList.add("sidebar__menuWrapper--documet");

    // 문서 링크 생성
    newDocumentItem.innerHTML = `<a href="#" id="sidebar__menuWrapper--documentLink" data-url="doc${newDocument.id}">${newDocument.title}<button onclick="addDoc(${newDocument.id})">+</button></a>`;

    // 문서 목록의 마지막에 새 항목 추가
    documentList.appendChild(newDocumentItem);

    // 새로 생성된 문서로 이동
    newDocumentItem.children[0].click();
  } catch (error) {
    console.error("새 페이지 생성 실패:", error);
    alert("페이지 생성에 실패했습니다.");
  }
};

//Root Document 생성 버튼
document.getElementById('sidebar__createDocument--button').addEventListener('click', () => {
  addRootDoc();
});

//하위 페이지 생성
const addDoc = async (parentId) => {
  const parentElement = document.querySelector(`[data-url="doc${parentId}"]`);

  try {
    // 새 문서 생성 API 호출
    const newDocument = await createDocumentPage("제목 없음44", parentId);

    // 새로운 문서 항목 생성
    const newDocumentItem = document.createElement("li");
    newDocumentItem.classList.add("sidebar__menuWrapper--documet");

    // 문서 링크 생성
    newDocumentItem.innerHTML = `<a href='#' id="sidebar__menuWrapper--documentLink" data-url="doc${newDocument.id}">${newDocument.title}<button onclick="addDoc(${newDocument.id})">+</button></a>`;

    // 하위 문서로 새 항목 추가
    parentElement.appendChild(newDocumentItem);

    // 새로 생성된 문서로 이동
    newDocumentItem.children[0].click();
  } catch (error) {
    console.error("새 페이지 생성 실패:", error);
    alert("페이지 생성에 실패했습니다.");
  }
};
