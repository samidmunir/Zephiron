interface FeatureCardProps {
  id: number;
  title: string;
  feature: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <main className="bg-gray-100 rounded-md p-8 shadow-2xl hover:scale-105 transition-all duration-1000">
      <section className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-[#0e4e87]">
          {props.icon}
          <h1 className="text-3xl font-bold">{props.title}</h1>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{props.feature}</h2>
        </div>
      </section>
      <div>
        <p className="text-xl">{props.description}</p>
      </div>
    </main>
  );
};

export default FeatureCard;
