import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">

        <div>

          <h2 className="text-2xl font-bold">

            SkillSprint AI

          </h2>

          <p className="mt-3 text-gray-400">

            AI Powered Career Development Platform

          </p>

        </div>

        <div className="flex gap-5">

          <Github className="cursor-pointer hover:text-blue-400"/>

          <Linkedin className="cursor-pointer hover:text-blue-400"/>

          <Mail className="cursor-pointer hover:text-blue-400"/>

        </div>

      </div>

      <p className="mt-10 text-center text-sm text-gray-500">

        © 2026 SkillSprint AI. All Rights Reserved.

      </p>

    </footer>
  );
}

export default Footer;