import frameworkData from "./framework.json";

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
  return (
    <div className="p-8">
        
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">Developed by: <strong>{item.details.developer}</strong></p>
          <p className="text-blue-600"> <a href={item.details.officialWebsite}>visit website </a> </p>

          {item.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full mr-2 mb-2 ${tagColors[index % tagColors.length]}`}
              >
                {tag}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
}