export default function FAQ() {
  const faqs = [
    {
      question: "Is FileNestX free to use?",
      answer: "Yes, most of our tools are completely free and work directly in your browser.",
    },
    {
      question: "Are my files secure?",
      answer: "Yes. Your files stay private and are automatically removed after processing.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No. You can use the majority of our tools without signing up.",
    },
    {
      question: "Which devices are supported?",
      answer: "FileNestX works on desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 mb-12 text-center text-gray-400">
          Everything you need to know about FileNestX.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-[#111] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
