"use client";
import { MdPassword } from "react-icons/md";

export default function ForgotPage() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(
      document.getElementById("old-pass").value,
      document.getElementById("new-pass").value
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <form
          className="flex border-t-4 border-black gap-1 flex-col px-8 py-4 bg-white shadow-lg rounded-md"
          action=""
        >
          <h1 className="text-3xl font-bold mt-2 mb-10 text-center ">
            Update Password
          </h1>
          <label className="flex gap-2 mt-4 font-semibold" htmlFor="old-pass">
            <MdPassword size={24} /> Old Password
          </label>
          <input
            type="password"
            id="old-pass"
            name=""
            placeholder="Your Old Password"
          />
          <label className="flex gap-2 mt-4 font-semibold" htmlFor="new-pass">
            <MdPassword size={24} /> New Password
          </label>
          <input
            type="password"
            id="new-pass"
            name=""
            placeholder="Your New Password"
          />
          <button
            onClick={handleClick}
            id="btn"
            type="submit"
            className="border-2 my-2 px-3 py-1 rounded-md text-sm text-white shadow-md bg-black border-black w-fit "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
