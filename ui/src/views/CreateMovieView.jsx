import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createMovie } from "../services/moviesAPI";

const AddMovieForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

 
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    year: Yup.number()
      .required("Year is required")
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), `Year can't be in the future`),
    genre: Yup.string().required("Genre is required"),
    synopsis: Yup.string()
      .required("Synopsis is required")
      .max(500, "Synopsis cannot exceed 500 characters"),
    cast: Yup.string().required("Cast is required"),
    image: Yup.mixed().test(
      "fileSize",
      "File is too large (max 5MB)",
      (value) => !value || (value && value.size <= 5000000)
    ),
  });

 
  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setFieldValue("image", file); 
  };

 
  const handleSubmit = async (values, { resetForm }) => {
    const data = new FormData();
    data.append("title", values.title);
    data.append("year", values.year);
    data.append("genre", values.genre);
    data.append("synopsis", values.synopsis);
    data.append("cast", JSON.stringify(values.cast.split(","))); 
    if (values.image) data.append("image", values.image);

    try {
      const result = await createMovie(data);
      toast.success("Movie created successfully!");
      console.log("Movie created:", result);
      resetForm(); 
      setImagePreview(null); 
    } catch (error) {
      toast.error("Error creating movie");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded">
      <h1 className="text-xl font-bold mb-4">Add New Movie</h1>
      <Formik
        initialValues={{
          title: "",
          year: "",
          genre: "",
          synopsis: "",
          cast: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-semibold">
                Title
              </label>
              <Field
                type="text"
                name="title"
                placeholder="Terminator"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Movie Title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

           
            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-semibold">
                Year
              </label>
              <Field
                type="number"
                name="year"
                placeholder="1984"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Release Year"
              />
              <ErrorMessage
                name="year"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

         
            <div className="mb-4">
              <label htmlFor="genre" className="block text-sm font-semibold">
                Genre
              </label>
              <Field
                type="text"
                name="genre"
                placeholder="Action"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Movie Genre"
              />
              <ErrorMessage
                name="genre"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

           
            <div className="mb-4">
              <label htmlFor="synopsis" className="block text-sm font-semibold">
                Synopsis
              </label>
              <Field
                as="textarea"
                name="synopsis"
                placeholder="A robot from 1984..."
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Movie Synopsis"
              />
              <ErrorMessage
                name="synopsis"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

          
            <div className="mb-4">
              <label htmlFor="cast" className="block text-sm font-semibold">
                Cast (comma-separated)
              </label>
              <Field
                type="text"
                name="cast"
                placeholder="Arnold Schwarzenegger, Linda Hamilton"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Movie Cast"
              />
              <ErrorMessage
                name="cast"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

          
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-semibold">
                Image (optional)
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setFieldValue)}
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Movie Image"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500 text-xs"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded"
                />
              )}
            </div>

          
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition"
            >
              Create Movie
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMovieForm;
