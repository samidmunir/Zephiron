import { useTheme } from "../context/Theme";

interface TestimonialCardProps {
  id: number;
  name: string;
  title: string;
  statement: string;
  relavantFeatures: string[];
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`rounded-md p-8 shadow-2xl w-full hover:scale-105 transition-all duration-1000 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <section className="">
        <div>
          <h1 className="text-2xl font-bold">
            {props.name} - {props.title}
          </h1>
        </div>
        <div className="my-8">
          <h2 className="text-md font-medium italic">"{props.statement}"</h2>
        </div>
        <div className="flex items-center justify-between">
          {props.relavantFeatures.map((feature) => (
            <p className="text-md font-semibold border-2 rounded-md px-2 py-1">
              {feature}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TestimonialCard;
