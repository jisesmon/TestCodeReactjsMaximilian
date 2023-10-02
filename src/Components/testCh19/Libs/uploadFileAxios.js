import http from './http-common';
export const uploadFileAxios = (url,file, onUploadProgress) => {
    let formData = new FormData();
  
    formData.append("file", file);
  
    return http.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };