import { BASE_URL } from "../constants/urls.js";
// api.js
// API GET 요청으로 문서 목록 가져오기
export const getRootDocuments = async () => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        "x-username": "teamouse1",
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getTargetContent = async (docId) => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        "x-username": "teamouse1",
      },
    });
    return await response.json()
  } catch (error) {
    console.error(error);
  }
};
