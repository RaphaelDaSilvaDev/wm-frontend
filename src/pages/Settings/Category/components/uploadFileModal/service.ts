import { api } from "../../../../../services/axios";

export async function UploadCategoriesFileService(file: File) {
  const payload = { file };
  await api.post("/category/upload", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
