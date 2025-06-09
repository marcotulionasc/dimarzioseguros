interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export function HowItWorks({ title, steps }: HowItWorksProps) {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-primary-light to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 