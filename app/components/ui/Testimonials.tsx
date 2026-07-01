
export default function Testimonials() {
  const reviews = [
    {
      name: "Muneeb",
      review: "The best free online tools website I have used.",
    },
    {
      name: "Afia",
      review: "Fast, simple and works perfectly on mobile.",
    },
    {
      name: "Ali Haider",
      review: "Great collection of PDF and developer tools.",
    },
  ];

  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white">
          What Users Say
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Trusted by users around the world.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-6"
            >
              <div className="mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300">
                "{review.review}"
              </p>

              <h3 className="mt-4 font-semibold text-white">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

