"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const Teams: React.FC = () => {
  const { t } = useTranslation("teams");

  const teamMembers: TeamMember[] = [
    {
      name: t("members.sarah.name"),
      role: t("members.sarah.role"),
      bio: t("members.sarah.bio"),
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      social: t("members.sarah.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.michael.name"),
      role: t("members.michael.role"),
      bio: t("members.michael.bio"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      social: t("members.michael.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.emily.name"),
      role: t("members.emily.role"),
      bio: t("members.emily.bio"),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      social: t("members.emily.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.david.name"),
      role: t("members.david.role"),
      bio: t("members.david.bio"),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      social: t("members.david.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.lisa.name"),
      role: t("members.lisa.role"),
      bio: t("members.lisa.bio"),
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
      social: t("members.lisa.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.james.name"),
      role: t("members.james.role"),
      bio: t("members.james.bio"),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      social: t("members.james.social", { returnObjects: true }) as TeamMember["social"],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([key, value]) => (
                    <motion.a
                      key={key}
                      href={key === "email" ? `mailto:${value}` : value}
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
