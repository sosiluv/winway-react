export default function Features() {
  const features = [
    {
      icon: 'ri-settings-3-line',
      title: 'Customizable Workflows',
      description: 'Tailor the OMS to your specific trading strategies and operational requirements, enhancing efficiency and control.'
    },
    {
      icon: 'ri-server-line',
      title: 'System Architecture & Infrastructure',
      description: 'Scalability: Engineered to handle high volumes of orders without compromising performance. Reliability: Built with robust infrastructure to ensure system stability and uptime. Integration-Friendly: Seamlessly connect with existing systems, data feeds, and APIs for a cohesive trading environment.'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Ultra Low Latency',
      description: 'Microsecond-level tick-to-trade latency. In-memory data structures with lock-free algorithms.'
    },
    {
      icon: 'ri-speed-line',
      title: 'High Throughput',
      description: 'Optimized C code. Capable of processing millions of messages per second. Horizontally scalable architecture using microservices and distributed message queues.'
    },
    {
      icon: 'ri-settings-4-line',
      title: 'Configurability & Extensibility',
      description: 'Strategy-specific rule engines. Flexible connectivity to exchanges, brokers, and internal systems.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with deep market expertise to deliver unparalleled trading performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
