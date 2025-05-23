import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkList() {

    const tagColors = [
        "bg-red-200 text-red-800",
        "bg-green-200 text-green-800",
        "bg-blue-200 text-blue-800",
        "bg-yellow-200 text-yellow-800",
        "bg-purple-200 text-purple-800",
        "bg-pink-200 text-pink-800",
        "bg-indigo-200 text-indigo-800",
      ];
    
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
      const matchesSearch =
        framework.name
                  .toLowerCase()
                  .includes(_searchTerm) ||
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);
  
      const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
  
      return matchesSearch && matchesTag;
    });
    const allTags = [
        new Set(frameworkData.flatMap((framework) => framework.tags)),
      ];


  return (
    <div className="p-8">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        onChange={(e) => setSelectedTag(e.target.value)}
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
            <option key={index} value={tag}>
            {tag}
            </option>
        ))}
      </select>
      {filteredFrameworks.map((item, index) => (
        <div
        key={item.id}
        className="border p-4 mb-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-600">Developed by: <strong>{item.details.developer}</strong></p>
        <p className="text-blue-600"> <a href={item.details.officialWebsite}>visit website </a> </p>

        <div className="mt-2 flex flex-wrap">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full mr-2 mb-2 ${tagColors[index % tagColors.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      {filteredFrameworks.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No frameworks found.</p>
      )}
    </div>
  );
}
