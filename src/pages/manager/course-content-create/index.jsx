import { CKEditor } from "@ckeditor/ckeditor5-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bold,
  ClassicEditor,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";

import { useMutation } from "@tanstack/react-query";
import "ckeditor5/ckeditor5.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Swal from "sweetalert2";
import { createCourseContent } from "../../../services/courseService";
import { STORAGE_KEY } from "../../../utils/const";
import { mutateContentSchema } from "../../../utils/zodSchema";
const ManageContentCreatePage = () => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  const token = session.token;
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const content = useLoaderData();
  console.log(content);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(mutateContentSchema),
  });

  const type = watch("type");

  const { mutateAsync } = useMutation({
    mutationFn: (data) => createCourseContent(data, token),
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await mutateAsync({
        ...values,
        courseId: id,
      });
      navigate(`/manager/courses/${id}`);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        id="Breadcrumb"
        className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5"
      >
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Manage Course
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Course
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Add Content
        </span>
      </div>
      <header className="flex items-center justify-between gap-[30px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
            <img
              src="/assets/images/thumbnails/th-1.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-[28px] leading-[42px]">
              {content == undefined ? "Add Content" : "Edit Content"}
            </h1>
            <p className="text-[#838C9D] mt-[1]">
              Give a best content for the course
            </p>
          </div>
        </div>
      </header>
      <form
        className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="title" className="font-semibold">
            Content Title
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/note-favorite-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <input
              {...register("title")}
              type="text"
              id="title"
              className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
              placeholder="Write better name for your course"
            />
          </div>
          {errors?.title && (
            <span className="error-message text-[#FF435A]">
              {errors?.title?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="type" className="font-semibold">
            Select Type
          </label>
          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
            <img
              src="/assets/images/icons/crown-black.svg"
              className="w-6 h-6"
              alt="icon"
            />
            <select
              {...register("type")}
              id="type"
              className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            >
              <option value="" hidden="">
                Choose content type
              </option>
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>
            <img
              src="/assets/images/icons/arrow-down.svg"
              className="w-6 h-6"
              alt="icon"
            />
          </div>
          {errors?.type && (
            <span className="error-message text-[#FF435A]">
              {errors?.type?.message}
            </span>
          )}
        </div>
        {type === "video" && (
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="video" className="font-semibold">
              Youtube Video ID
            </label>
            <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
              <img
                src="/assets/images/icons/bill-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <input
                {...register("youtubeId")}
                type="text"
                id="video"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                placeholder="Write tagline for better copy"
              />
            </div>
            {errors?.youtubeId && (
              <span className="error-message text-[#FF435A]">
                {errors?.youtubeId?.message}
              </span>
            )}
          </div>
        )}

        {type === "text" && (
          <div className="flex flex-col gap-[10px]">
            <label className="font-semibold">Content Text</label>
            <CKEditor
              editor={ClassicEditor}
              config={{
                licenseKey: "GPL",
                toolbar: [
                  "undo",
                  "redo",
                  "|",
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "|",
                  "link",
                  "insertTable",
                  "mediaEmbed",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "indent",
                  "outdent",
                ],
                plugins: [
                  Bold,
                  Essentials,
                  Heading,
                  Indent,
                  IndentBlock,
                  Italic,
                  Link,
                  List,
                  MediaEmbed,
                  Paragraph,
                  Table,
                  Undo,
                ],
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setValue("text", data);
              }}
            />
            {errors?.text && (
              <span className="error-message text-[#FF435A]">
                {errors?.text?.message}
              </span>
            )}
          </div>
        )}
        <div className="flex items-center gap-[14px]">
          <button
            type="button"
            className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            {isLoading ? "Loading..." : "Add Content Now"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ManageContentCreatePage;
