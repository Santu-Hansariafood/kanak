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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 dark:from-gray-800 p-8">
                  <div className="w-40 h-40 mx-auto relative">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={160}
                      height={160}
                      priority
                      className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <Title text={member.name} as="h3" align="center" className="mb-2" />
                  <Paragraph
                    text={member.role}
                    className="text-teal-600 dark:text-teal-400 font-semibold mb-4 text-lg"
                  />
                  <Paragraph text={member.bio} className="mb-6" />

                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([key, value]) => (
                      <motion.a
                        key={key}
                        href={typeof value === "string" ? (key === "email" ? `mailto:${value}` : value) : undefined}
                        target={typeof value === "string" && key !== "email" ? "_blank" : undefined}
                        rel={typeof value === "string" && key !== "email" ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        {key === "linkedin" && <Linkedin className="w-5 h-5" />}
                        {key === "twitter" && <Twitter className="w-5 h-5" />}
                        {key === "email" && <Mail className="w-5 h-5" />}
                      </motion.a>
                    ))}
                  </div>
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
