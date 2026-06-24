import { useState } from "react";

function Tabs({ organizations }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {organizations.map((org, index) => (
          <button
            key={org.id}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-lg transition ${
              activeTab === index
                ? "bg-red-800"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {org.name}
          </button>
        ))}
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 text-center">
        <img
          src={organizations[activeTab].logo}
          alt={organizations[activeTab].name}
          className="w-32 h-32 mx-auto mb-6 rounded-xl"
        />

        <h2 className="text-3xl font-bold mb-4">
          {organizations[activeTab].name}
        </h2>

        <p className="text-slate-300">{organizations[activeTab].description}</p>
      </div>
    </div>
  );
}

export default Tabs;
