'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { useTeamMembers } from "@/hooks/Teams/useTeamMembers";

const Title = dynamic(() => import("@/components/common/Title/Title"));
const Paragraph = dynamic(() => import("@/components/common/Paragraph/Paragraph"));

const Teams: React.FC = () => {
  const { teamMembers, t } = useTeamMembers();

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Title
            text={t("title")}
            subtitle={t("subtitle")}
            as="h1"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-32 h-32 mx-auto relative mb-6">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={128}
                    height={128}
                    priority={index < 2}
                    className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <Title text={member.name} as="h2" align="center" className="mb-2" />
                <Paragraph
                  text={member.role}
                  className="text-teal-600 dark:text-teal-400 font-semibold mb-4"
                />
                <Paragraph text={member.bio} className="mb-6" />

                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([key, value]) => (
                    <motion.a
                      key={key}
                      href={typeof value === "string" ? (key === "email" ? `mailto:${value}` : value) : undefined}
                      target={typeof value === "string" && key !== "email" ? "_blank" : undefined}
                      rel={typeof value === "string" && key !== "email" ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    >
                      {key === "linkedin" && <Linkedin className="w-5 h-5" />}
                      {key === "twitter" && <Twitter className="w-5 h-5" />}
                      {key === "email" && <Mail className="w-5 h-5" />}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
