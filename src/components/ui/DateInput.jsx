import React, { useState } from "react";
import { Label } from ".";

export const DateInput = ({
  placeholder,
  formValues,
  setFormValues,
  value,
  name,
  labelName,
  handleChange,
  formErrors,
  error,
  inputRef,
  isDragging,
  setIsDragging,
  profileError,
  setFormErrors,
  errors,
}) => {
  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadImage = (file) => {
    const imageUrl = URL.createObjectURL(file);

    setImageUrl(imageUrl);

    setFormValues((previous) => ({ ...previous, profile: imageUrl }));
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // ERROR MESSAGE ARILAHGUI BAIGAAA ALDAATAI !!!!!!
    // setFormErrors((previous) => ({ ...previous, [profile]: "" }));
  };

  const handlePicture = (event) => {
    // const uploadedImage = event.target.files(0);
    const uploadedImage = Array.from(event.target.files).at(0);
    // setFormErrors((previous) => ({ ...previous, [name]: "", errors: "" }));
    setFormErrors((previous) => ({ ...previous, profile: "" }));
    handleUploadImage(uploadedImage);
  };

  const clearImage = () => {
    inputRef.current.value = "";

    setImageUrl("");

    setFormValues((previous) => ({ ...previous, profile: "" }));
  };
  // const handleChange = (event) => {
  //   const { value, name } = event.target;

  //   setFormValues((previous) => ({ ...previous, [name]: value }));
  //   setFormErrors((previous) => ({ ...previous, [name]: "" }));
  // };
  console.log(formValues);

  const handleDrop = (event) => {
    event.preventDefault();

    const uploadedImage = Array.from(event.dataTransfer.files).at(0);

    handleUploadImage(uploadedImage);
    setFormErrors((previous) => ({ ...previous, profile: "" }));
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col">
      <Label name="Date of birth" />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <p className="text-red-600 text-[12px]">{error}</p>}
      {/* <p className="text-red-600 text-[12px]">{formErrors.birthday}</p> */}
      <div className="relative top-[20px] flex  flex-col gap-[7px]">
        <Label name="Profile image" />
        <div>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleBrowserClick}
            onDragLeave={handleDragLeave}
            className={`w-[416px] h-[180px] ${
              isDragging
                ? "border border-dashed border-gray-400"
                : "border border-gray-300"
            } hover:cursor-pointer bg-gray-100 rounded-[6px] flex flex-col items-center justify-center gap-1  border-gray-200`}
          >
            {imageUrl ? (
              <div className="relative">
                {/* <button
                  onClick={clearImage}
                  className="hover:cursor-pointer absolute top-2 right-2 bg-gray-700 text-white rounded-full w-[30px] h-[30px]"
                >
                  X
                </button> */}

                <img
                  src={imageUrl}
                  alt=""
                  className="h-[180px] w-[416px] rounded-[6px]"
                />
              </div>
            ) : (
              <>
                <img src="file-icon.png" alt="" className="h-[28px] w-[28px]" />
                <p className="text-[15px] font-semibold">
                  Browse or Drop Image
                </p>
              </>
            )}
          </div>
          {imageUrl && (
            <button
              onClick={clearImage}
              className="hover:cursor-pointer absolute top-9 right-4 bg-gray-700 text-white rounded-full w-[30px] h-[30px]"
            >
              X
            </button>
          )}
          {profileError && (
            <p className="text-red-600 text-[12px]">{profileError}</p>
          )}
          <input
            hidden
            type="file"
            name="profile"
            ref={inputRef}
            onChange={handlePicture}
          />
        </div>
      </div>
    </div>
  );
};

// div
// div
// div
// div
