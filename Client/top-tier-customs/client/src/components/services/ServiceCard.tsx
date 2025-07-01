// // src/components/services/ServiceCard.tsx
// import { useNavigate } from "react-router-dom";

// interface Service {
//   _id: string;
//   title: string;
//   description: string;
//   dropoffRequired: boolean;
//   estimatedTime: string;
//   price: number;
//   category: string;
//   image: string;
// }

// interface Props {
//   service: Service;
// }

// const ServiceCard: React.FC<Props> = ({ service }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="rounded-xl overflow-hidden shadow-md border hover:shadow-lg transition bg-white dark:bg-zinc-800 dark:border-zinc-700 cursor-pointer"
//       onClick={() => navigate(`/services/${service._id}`)}
//     >
//       <div className="h-48 w-full overflow-hidden">
//         <img
//           src={service.image || "/placeholder.jpg"}
//           alt={service.title}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//       <div className="p-4 space-y-2">
//         <h2 className="text-lg font-semibold line-clamp-1">{service.title}</h2>
//         <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
//           {service.description}
//         </p>
//         <div className="flex justify-between items-center text-sm font-medium text-sky-600 dark:text-sky-400">
//           <span>￡{service.price.toFixed(2)}</span>
//           <span>{service.estimatedTime}</span>
//         </div>
//         {service.dropoffRequired && (
//           <span className="inline-block mt-2 text-xs font-medium text-white bg-rose-500 px-2 py-1 rounded-md">
//             Drop-off Required
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

// src/components/services/ServiceCard.tsx
import { useNavigate } from "react-router-dom";

interface Service {
  _id: string;
  title: string;
  description: string;
  dropOff: boolean;
  duration: {
    min: number;
    max: number;
  };
  price: number;
  category: string;
  type: string;
  image: string;
}

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-xl overflow-hidden shadow-md border hover:shadow-lg transition bg-white dark:bg-zinc-800 dark:border-zinc-700 cursor-pointer"
      // onClick={() => navigate(`/services/${service._id}`)}
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={service.image || "/placeholder.jpg"}
          alt={service.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-1">{service.title}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
          {service.description}
        </p>
        <div className="flex justify-between text-sm text-sky-600 dark:text-sky-400 font-medium">
          <span>￡{service.price.toFixed(2)}</span>
          <span>
            {service.duration.min}–{service.duration.max} hrs
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs mt-2">
          <span className="bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white px-2 py-1 rounded">
            {service.category}
          </span>
          <span className="bg-amber-100 text-amber-600 dark:bg-amber-700 dark:text-white px-2 py-1 rounded">
            {service.type}
          </span>
          {service.dropOff && (
            <span className="bg-rose-500 text-white px-2 py-1 rounded">
              Drop-off Required
            </span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(`/booking-new/${service._id}`)}
            className="px-2 py-1 text-lg font-semibold border-2 border-sky-500 rounded-md text-zinc-100 transition-all duration-1000 hover:bg-sky-500"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
