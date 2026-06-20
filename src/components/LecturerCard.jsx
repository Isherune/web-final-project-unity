function LecturerCard({ lecturer }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:-translate-y-1 transition duration-300">

      <img
        src={lecturer.photo}
        alt={lecturer.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h3 className="text-xl font-semibold text-center">
        {lecturer.name}
      </h3>

      <p className="text-slate-400 text-center">
        NIDN: {lecturer.nidn}
      </p>

      <p className="text-red-500 text-center mt-2">
        {lecturer.field}
      </p>

    </div>
  );
}

export default LecturerCard;