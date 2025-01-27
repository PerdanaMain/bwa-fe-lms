import { Link, useRevalidator } from "react-router-dom";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { deleteCourseContent } from "../../../services/courseService";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../../../utils/const";
import { useState } from "react";
import Swal from "sweetalert2";

const ContentItem = ({
  id = "1",
  index = 1,
  type = "video",
  title = "Install VSCode di Windows",
  courseId = "2",
}) => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  const token = session.token;
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: () => deleteCourseContent(id, token),
  });

  const revalidator = useRevalidator();

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      await mutateAsync();

      revalidator.revalidate();
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        text: error?.message,
        icon: "error",
        title: "Error While deleting content",
      });
    }
  };

  return (
    <div className="card flex items-center gap-5">
      <div className="relative flex shrink-0 w-[140px] h-[110px] ">
        <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
          <span className="font-bold text-sm leading-[21px]">{index}</span>
        </p>
        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={`/assets/images/thumbnails/cover-${type}.png`}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1 capitalize">
          {title}
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src={`/assets/images/icons/${
                type == "video" ? "video-play-purple" : "note-favorite-purple"
              }.svg`}
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#838C9D] capitalize">{type}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Link
          to={`/manager/courses/${courseId}/edit/${id}`}
          className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
        >
          Edit Content
        </Link>
        <button
          type="button"
          disabled={isLoading}
          className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
          onClick={handleDelete}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

ContentItem.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
  courseId: PropTypes.string,
};

export default ContentItem;
