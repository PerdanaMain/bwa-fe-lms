import { Link } from "react-router-dom";

const ManageStudentsPage = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Manage Students
          </h1>
          <p className="text-[#838C9D] mt-[1]">
            Keep your employee or student happy
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import File
          </Link>
          <Link
            to="create-new-student.html"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Add Student
          </Link>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <div className="card flex items-center gap-5">
          <div className="relative flex shrink-0 w-20 h-20">
            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
              <img
                src="/assets/images/photos/photo-3.png"
                className="w-full h-full object-cover"
                alt="photo"
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
              Angga Risky Setiawan
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px] mt-[6px]">
                <img
                  src="/assets/images/icons/note-favorite-purple.svg"
                  className="w-5 h-5"
                  alt="icon"
                />
                <p className="text-[#838C9D]">183 Course Joined</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <Link
              to="#"
              className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
            >
              Edit Profile
            </Link>
            <button
              type="button"
              className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
            >
              Delete
            </button>
          </div>
        </div>
        {/* <div id="Pagination" className="flex items-center gap-3">
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
          >
            <span className="font-semibold text-sm leading-[21px]">1</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">2</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">3</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">4</span>
          </button>
          <button
            type="button"
            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
          >
            <span className="font-semibold text-sm leading-[21px]">5</span>
          </button>
        </div> */}
      </section>
    </>
  );
};

export default ManageStudentsPage;
