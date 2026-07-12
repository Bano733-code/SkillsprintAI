import {
  FileText,
  Brain,
  Map,
  Briefcase,
  Mic,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analysis",
    description:
      "Upload your resume and receive AI-powered insights to improve it.",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    description:
      "Discover missing skills required for your dream career.",
  },
  {
    icon: Map,
    title: "Learning Roadmap",
    description:
      "Get a personalized roadmap tailored to your goals.",
  },
  {
    icon: Briefcase,
    title: "Project Recommendations",
    description:
      "Build portfolio projects that match your current skill level.",
  },
  {
    icon: Mic,
    title: "Interview Practice",
    description:
      "Practice AI-generated interview questions and improve your confidence.",
  },
  {
    icon: MessageSquare,
    title: "Career Chat",
    description:
      "Chat with your AI career mentor anytime for personalized guidance.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            SkillSprint AI provides all the tools needed to accelerate
            your career journey.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4">

                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;