export default function Stats() {
  const stats = [
    {
      number: "100K+",
      title: "Users",
    },
    {
      number: "1M+",
      title: "Files Converted",
    },
    {
      number: "99.9%",
      title: "Uptime",
    },
    {
      number: "50+",
      title: "Online Tools",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}