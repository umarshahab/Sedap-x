import testimonialsG from "../data/testimonials.json";

const TestimonialsG = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Mereka</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsG.map(testi => (
          <div key={testi.id} className="bg-white shadow-md p-6 rounded-lg">
            <img src={testi.avatar} alt={testi.name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-semibold">{testi.name}</h3>
            <p className="text-gray-600 mt-2">{testi.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsG;
