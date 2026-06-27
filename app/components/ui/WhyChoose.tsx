import { ShieldCheck, Zap, Globe, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Zap size={40} />,
    title: "Lightning Fast",
    desc: "Convert your files within seconds.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "100% Secure",
    desc: "Your uploaded files are automatically deleted.",
  },
  {
    icon: <Globe size={40} />,
    title: "Works Everywhere",
    desc: "Use FileNestX on desktop, tablet and mobile.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Free Forever",
    desc: "No signup. No hidden charges.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white">
          Why Choose FileNestX?
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Fast, secure and modern online file toolkit.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#111] border border-gray-800 p-8 hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}