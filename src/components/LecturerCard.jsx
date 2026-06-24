function LecturerCard({ lecturer }) {
  return (
    <div
      className="
        bg-slate-800
        rounded-xl
        overflow-hidden
        shadow-lg
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Foto */}
      <div className="h-[180px] overflow-hidden">
        <img
          src={lecturer.photo}
          alt={lecturer.name}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-white leading-tight">
          {lecturer.name}
        </h3>

        <p className="text-slate-400 text-sm mt-1">NIDN: {lecturer.nidn}</p>

        <p className="text-red-800 font-medium text-sm mt-2">
          {lecturer.field}
        </p>

        <p className="text-slate-300 text-xs mt-1">{lecturer.kdk}</p>

        <span
          className="
            inline-block
            mt-3
            px-3
            py-1
            rounded-full
            bg-cyan-600
            text-white
            text-xs
          "
        >
          {lecturer.role}
        </span>

        {/* Tombol Publikasi */}
        <a
          href={
            lecturer.publication && lecturer.publication.length > 0
              ? lecturer.publication[0].link
              : "#"
          }
          target="_blank"
          rel="noreferrer"
          className="
            block
            mt-4
            bg-cyan-600
            hover:bg-cyan-600
            text-white
            py-2
            rounded-lg
            transition
          "
        >
          Lihat Publikasi
        </a>
      </div>
    </div>
  );
}

export default LecturerCard;
