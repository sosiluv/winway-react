
export default function Stats() {
  const stats = [
    {
      number: "50+",
      label: "Financial Institutions"
    },
    {
      number: "21",
      label: "Years of Experience"
    },
    {
      number: "99.9%",
      label: "System Uptime"
    },
    {
      number: "CME Group",
      label: "Global Partnership"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-cormorant">
                {stat.number}
              </div>
              <div className="text-xl md:text-2xl text-gray-700 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}