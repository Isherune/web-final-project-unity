import { useState } from "react";

function Accordion({ semester, courses }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex justify-between items-center"
      >
        <span className="font-semibold">
          Semester {semester}
        </span>

        <span>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li
                key={index}
                className="text-slate-300"
              >
                • {course}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Accordion;