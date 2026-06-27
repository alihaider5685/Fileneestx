type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
