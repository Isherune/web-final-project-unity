import { useState } from "react";

function Accordion({ semester, courses }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-300 rounded-xl overflow-hidden border border-slate-700 shadow-md">

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          text-left
          p-5
          flex
          justify-between
          items-center
          transition-colors
          duration-300
          hover:bg-cyan-600
          hover:text-white
        "
      >
        <span className="font-semibold text-lg">
          Semester {semester}
        </span>

        <span
          className={`
            text-2xl
            transition-transform
            duration-300
            ease-in-out
            ${open ? "rotate-45" : "rotate-0"}
          `}
        >
          +
        </span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-[max-height,opacity]
          duration-500
          ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 pb-5 pt-2">
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li
                key={index}
                className="
                  text-slate-800
                  hover:text-cyan-600
                  transition-colors
                  duration-200
                "
              >
                • {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Accordion;