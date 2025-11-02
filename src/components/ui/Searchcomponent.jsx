import React from "react";
import { Search, Filter } from "lucide-react";

function Searchcomponent() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
      <div className="flex-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </span>
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 bg-transparent  border-[#3d9797] focus:border-[#247474] focus:ring-0 outline-none shadow-sm"
          />
        </div>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 border border-[#3d9797] rounded-lg px-4 py-4 hover:shadow-sm text-sm text-slate-700"
      >
        <Filter className="w-4 h-4" />
        Filter
      </button>
    </div>
  );
}

export default Searchcomponent;
