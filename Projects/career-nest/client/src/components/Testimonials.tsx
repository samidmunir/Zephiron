import { useTheme } from "../context/Theme";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 0,
    name: "Sofia",
    title: "The Computer Science Graduate",
    statement:
      "I just graduated with a CS degree and was applying to internships, junior dev roles, and apprenticeships all at once. I was using spreadsheets, sticky notes, and my memory — and still missed follow-ups. CareerNest helped me organize 40+ job apps, track interview stages, and finally land a front-end role at a startup.",
    relavantFeatures: [
      "Job Application Tracker",
      "Interview State Timeline",
      "Smart Reminders",
    ],
  },
  {
    id: 1,
    name: "Jalen",
    title: "The Bootcamp Grad",
    statement:
      "After my bootcamp, I knew I needed to hustle. I was applying to 5–10 jobs per day, but lost track of who I’d followed up with. With CareerNest, I was able to track every application and see how I was improving. I also discovered new job leads based on others like me — which helped me land more interviews.",
    relavantFeatures: [
      "Application Analytics",
      "Smart Job Recommendations",
      "Resume Bank",
    ],
  },
  {
    id: 2,
    name: "Amira",
    title: "The Career Switcher",
    statement:
      "I left a 10-year teaching career to transition into UX design. CareerNest made it easier to stay motivated and focused — tracking jobs by category and location, uploading tailored resumes, and seeing a timeline of my efforts. I landed two interviews within a month after I got organized.",
    relavantFeatures: [
      "Custom Tags + Filter",
      "Resume Uploads",
      "Visual Progress Timeline",
    ],
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`w-full p-8 transition-all duration-1000 ${
        isDark ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-4xl text-center font-semibold ${
          isDark ? "text-[#46a8de]" : "text-[#0e4e87]"
        }`}
      >
        What Our Users are Saying
      </h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            title={testimonial.title}
            statement={testimonial.statement}
            relavantFeatures={testimonial.relavantFeatures}
          />
        ))}
      </section>
    </main>
  );
};

export default Testimonials;
