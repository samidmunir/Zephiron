import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  DollarSign,
  ExternalLink,
  Save,
  ArrowLeft,
  Plus,
  X,
  Edit3,
} from "lucide-react";

import { useApplicationStore } from "../stores/ApplicationStore";

export default function Application() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { fetchedApplication, getApplication, update } = useApplicationStore();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    workType: "remote",
    location: {
      city: "",
      country: "",
    },
    salary: {
      amount: "",
      period: "yearly",
    },
    description: "",
    notes: "",
    requiredSkills: [],
    applicationURL: "",
    category: "",
    position: "",
    status: "wishlist",
  });

  const [skillInput, setSkillInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        // Replace with your actual API call
        // const response = await getApplicationById(id)
        // setFormData(response.data)

        // Mock data for demonstration - replace with actual API call
        console.log(`Fetching application with ID: ${id}`);

        const res = await getApplication(id);
        setFormData(fetchedApplication);

        setIsLoading(false);

        // Simulate API delay
        // setTimeout(() => {
        //   // Mock application data - replace with actual API response
        //   setFormData({
        //     title: "Senior Frontend Developer",
        //     company: "TechCorp Inc.",
        //     workType: "hybrid",
        //     location: {
        //       city: "San Francisco",
        //       country: "USA",
        //     },
        //     salary: {
        //       amount: "120000",
        //       period: "yearly",
        //     },
        //     description:
        //       "We are looking for a Senior Frontend Developer to join our team...",
        //     notes: "Great company culture, competitive benefits package.",
        //     requiredSkills: ["React", "TypeScript", "Node.js", "GraphQL"],
        //     applicationURL: "https://techcorp.com/jobs/senior-frontend-dev",
        //     category: "Technology",
        //     position: "Senior",
        //     status: "interview",
        //   });
        //   setIsLoading(false);
        // }, 1000);
      } catch (error) {
        console.error("Error fetching application:", error);
        alert("Error loading application. Please try again.");
        navigate("/dashboard");
      }
    };

    if (id) {
      fetchApplication();
    }
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addSkill = () => {
    if (
      skillInput.trim() &&
      !formData.requiredSkills.includes(skillInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        requiredSkills: [...prev.requiredSkills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      console.log("Updating application:", formData);
      // Replace with your actual API call
      // await updateApplication(id, formData)

      const res = await update(fetchedApplication._id, formData);

      setIsSaving(false);

      // Simulate API delay
      //   setTimeout(() => {
      //     alert("Application updated successfully!");
      //     navigate("/dashboard");
      //   }, 1000);
    } catch (error) {
      console.error("Error updating application:", error);
      alert("Error updating application. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const categories = [
    "Technology",
    "Design",
    "Marketing",
    "Sales",
    "Product",
    "Data Science",
    "Engineering",
    "Finance",
    "Operations",
    "Human Resources",
    "Customer Success",
    "Other",
  ];

  const positions = [
    "Intern",
    "Junior",
    "Mid-level",
    "Senior",
    "Lead",
    "Manager",
    "Director",
    "VP",
    "C-Level",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading application...</p>
        </div>
      </div>
    );
  }

  if (isSaving) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Saving application...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600 rounded-full p-2">
                  <Edit3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900 font-serif">
                    Edit Application
                  </h1>
                  <p className="text-sm text-slate-600">
                    Update your job application details
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  formData.status === "applied"
                    ? "bg-blue-100 text-blue-700"
                    : formData.status === "interview"
                    ? "bg-yellow-100 text-yellow-700"
                    : formData.status === "offer"
                    ? "bg-green-100 text-green-700"
                    : formData.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {formData.status.charAt(0).toUpperCase() +
                  formData.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-emerald-600" />
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. Senior Frontend Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. TechCorp Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Position Level *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Select Position</option>
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Location & Work Type */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
              Location & Work Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="location.city"
                  value={formData.location.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. San Francisco"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="location.country"
                  value={formData.location.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. USA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Work Type
                </label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="in-person">In-Person</option>
                </select>
              </div>
            </div>
          </div>

          {/* Salary Information */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
              Salary Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Salary Amount *
                </label>
                <input
                  type="number"
                  name="salary.amount"
                  value={formData.salary.amount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. 120000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Salary Period *
                </label>
                <select
                  name="salary.period"
                  value={formData.salary.period}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="yearly">Yearly</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
            </div>
          </div>

          {/* Application Details */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <ExternalLink className="h-5 w-5 mr-2 text-emerald-600" />
              Application Details
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Application URL *
                </label>
                <input
                  type="url"
                  name="applicationURL"
                  value={formData.applicationURL}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="https://company.com/jobs/123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="wishlist">Wishlist</option>
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Paste the job description here..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Personal Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Add your personal notes about this application..."
                />
              </div>
            </div>
          </div>

          {/* Required Skills */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Required Skills
            </h2>

            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="e.g. React, JavaScript, Node.js"
                />
                <button
                  type="button"
                  onClick={addSkill}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center space-x-1 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add</span>
                </button>
              </div>

              {formData.requiredSkills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-emerald-600 hover:text-emerald-800"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-2 rounded-md flex items-center space-x-2 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>{isSaving ? "Saving..." : "Update Application"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
