const fetchDocumentsInfo = async () => {
  const data = await fetch("https://kdt-api.fe.dev-cos.com/documents", {
    headers: {
      "x-username": "teamouse",
    },
  });
  return await data.json();
};

const documents = fetchDocumentsInfo()

const createDocumentList = () => {
  console.log('hello');
  
}
