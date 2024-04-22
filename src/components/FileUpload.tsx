import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { UploadFile, UploadProps } from "antd/lib/upload/interface";

function FileUpload() {
  const [fileList, setFileList] = useState<UploadFile[]>([
    // Initialize with default file(s) if needed
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    // Update the file list state whenever it changes
    setFileList(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      // If the file doesn't have a URL or preview image, generate one
      file.preview = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    // Open a new window to display the preview image
    window.open(file.url || file.preview || "");
  };
  const beforeUpload = (file: File) => {
    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const previewUrl = reader.result as string;
      const uid = `${Date.now()}`;

      // Update the file list state with the preview URL
      setFileList((prevFileList) => [
        ...prevFileList,
        {
          uid,
          name: file.name,
          status: "done",
          url: previewUrl,
          preview: previewUrl,
        },
      ]);
    };
    return false; // Prevent default upload behavior
  };
  return (
    <ImgCrop>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length < 5 && "+ Upload"} {/* Limit to 5 files */}
      </Upload>
    </ImgCrop>
  );
}

export default FileUpload;
