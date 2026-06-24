function SearchBar({ search, setSearch, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-red-800"
    />
  );
}

export default SearchBar;
