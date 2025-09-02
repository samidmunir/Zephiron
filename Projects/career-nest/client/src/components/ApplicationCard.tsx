import { useTheme } from "../contexts/Theme";
import {
  MdLaptop,
  MdLocationCity,
  MdLocationDisabled,
  MdAnchor,
  MdCheckBox,
  MdCancel,
  MdError,
  MdFlare,
  MdFlashOn,
  MdThumbUp,
} from "react-icons/md";
// import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ApplicationCardProps = {
  id: string;
  title: string;
  company: string;
  position: string;
  category: string;
  workType: string;
  status: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  salary: {
    amount: number;
    period: string;
  };
  createdAt: string;
  updatedAt: string;
};

const ApplicationCard = (props: ApplicationCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navigate = useNavigate();

  const today = new Date().toISOString();

  const getPositionIcon = (position: string) => {
    const test = position.toLowerCase();

    if (test === "entry-level") {
      return <MdThumbUp />;
    } else if (test === "junior") {
      return <MdFlare />;
    } else if (test === "senior") {
      return <MdFlashOn />;
    }
  };

  const getWorkTypeIcon = (workType: string) => {
    const test = workType.toLowerCase();

    if (test === "in-person") {
      return <MdLocationCity />;
    } else if (test === "hybrid") {
      return <MdLaptop />;
    } else {
      return <MdLocationDisabled />;
    }
  };

  const getStatusIcon = (status: string) => {
    const test = status.toLowerCase();

    if (test === "wishlist") {
      return <MdAnchor className={`w-6 h-6`} />;
    } else if (test === "applied") {
      return <MdCheckBox className={`w-6 h-6`} />;
    } else if (test === "rejected") {
      return <MdCancel className={`w-6 h-6`} />;
    } else if (test === "closed") {
      return <MdError className={`w-6 h-6`} />;
    }
  };

  const parseDateDisplay = (createdAt: string, updatedAt: string) => {
    const todayDate = today.substring(0, 10);

    const createdAtDate = createdAt.substring(0, 10);
    const createdAtTime = createdAt.substring(11, 16);

    const updatedAtDate = updatedAt.substring(0, 10);
    const updatedAtTime = updatedAt.substring(11, 16);

    if (createdAtDate === updatedAtDate) {
      if (createdAtDate === todayDate) {
        return (
          <p
            className={`text-sm text-right ${
              isDark ? "text-zinc-700" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            <span
              className={`font-semibold ${
                isDark ? "" : ""
              } transition-all duration-1500`}
            >
              Created at:{" "}
            </span>
            {createdAtTime}
          </p>
        );
      } else {
        return (
          <p
            className={`text-sm text-right ${
              isDark ? "text-zinc-700" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            <span
              className={`font-semibold ${
                isDark ? "" : ""
              } transition-all duration-1500`}
            >
              Created at:{" "}
            </span>
            {createdAtDate}
          </p>
        );
      }
    } else {
      if (updatedAtDate === todayDate) {
        return (
          <p
            className={`text-sm text-right ${
              isDark ? "text-zinc-700" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            <span
              className={`font-semibold ${
                isDark ? "" : ""
              } transition-all duration-1500`}
            >
              Updated at:{" "}
            </span>
            {updatedAtTime}
          </p>
        );
      } else {
        return (
          <p
            className={`text-sm text-right ${
              isDark ? "text-zinc-700" : "text-zinc-800"
            } transition-all duration-1500`}
          >
            <span
              className={`font-semibold ${
                isDark ? "" : ""
              } transition-all duration-1500`}
            >
              Updated at:{" "}
            </span>
            {updatedAtDate}
          </p>
        );
      }
    }
  };

  return (
    <div
      onClick={() => navigate(`/application-store/edit/${props.id}`)}
      className={`border-2 rounded-md p-2 shadow-2xl space-y-2 ${
        isDark ? "bg-zinc-900" : ""
      } hover:scale-105 transition-all duration-1500`}
    >
      <section className="flex items-center justify-between">
        <p
          className={`text-sm uppercase ${
            isDark ? "text-zinc-700" : ""
          } transition-all duration-1500`}
        >
          {props.category}
        </p>
        <p>{getStatusIcon(props.status)}</p>
      </section>
      <section
        className={`space-y-2 ${isDark ? "" : ""} transition-all duration-1500`}
      >
        <div className="flex items-center justify-between">
          <h1
            className={`text-xl font-medium ${
              isDark ? "text-orange-400" : "text-blue-600"
            } transition-all duration-1500`}
          >
            {props.title}
          </h1>
          <h2
            className={`text-xl font-semibold ${
              isDark ? "text-zinc-300" : "text-zinc-900"
            } transition-all duration-1500`}
          >
            {props.company}
          </h2>
        </div>
        <div
          className={`flex items-center justify-between transition-all duration-1500`}
        >
          {props.location.state === "" ? (
            <h3
              className={`${
                isDark ? "text-sky-600" : ""
              } transition-all duration-1500`}
            >
              {props.location.city}, {props.location.country}
            </h3>
          ) : (
            <h3
              className={`${
                isDark ? "text-sky-600" : ""
              } transition-all duration-1500`}
            >
              {props.location.city}, {props.location.state}
            </h3>
          )}
          <div className="flex items-center gap-2">
            <p>{getWorkTypeIcon(props.workType)}</p>
            <p>{getPositionIcon(props.position)}</p>
          </div>
        </div>
      </section>
      <section
        className={`${isDark ? "" : ""} transition-all duration-1500`}
      ></section>
      <div
        className={`text-lg uppercase text-center ${
          isDark ? "text-zinc-500" : ""
        } transition-all duration-1500`}
      >
        {props.salary.period === "yearly" ? (
          <p>${props.salary.amount}/yr</p>
        ) : (
          <p>${props.salary.amount}/hr</p>
        )}
      </div>
      <div>{parseDateDisplay(props.createdAt, props.updatedAt)}</div>
    </div>
  );
};

export default ApplicationCard;
