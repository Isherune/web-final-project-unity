function StatisticCounter({ value, label }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl text-center">
      <h2 className="text-4xl font-bold text-red-500">
        {value}+
      </h2>

      <p className="mt-2 text-slate-300">
        {label}
      </p>
    </div>
  );
}

export default StatisticCounter;