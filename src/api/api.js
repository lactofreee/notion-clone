// api.js
// API GET 요청으로 문서 목록 가져오기
export const fetchDocumentsInfo = async () => {
  const response = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    headers: {
      "x-username": "teamouse",
    },
  });
  return await response.json();
};
