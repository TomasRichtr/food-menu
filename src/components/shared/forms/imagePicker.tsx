"use client";

import Image from "next/image";
import {
  useRef, useState,
} from "react";

import classes from "./imagePicker.module.css";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker = ({
  label,
  name,
}: ImagePickerProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const handleImagePick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div
      className={classes.picker}
    >
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <div
        className={classes.controls}
      >
        <div
          className={classes.preview}
        >
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Selected image"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/*"
          name={name}
          ref={imageInputRef}
          required
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
