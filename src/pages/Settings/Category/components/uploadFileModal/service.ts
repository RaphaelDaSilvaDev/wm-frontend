import { api } from "../../../../../services/axios";

export async function UploadCategoriesFileService(file: File) {
  const payload = { file };
  await api.post("/category/upload", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function UploadProductsFileService(file: File) {
  const payload = { file };
  await api.post("/product/upload", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
