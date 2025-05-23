{frameworkData.map((item) => (
    <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
    </div>
))}
