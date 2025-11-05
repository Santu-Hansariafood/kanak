
import { useTranslation } from "react-i18next";

export interface TeamMember {
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

export const useTeamMembers = () => {
  const { t } = useTranslation("teams");

  const teamMembers: TeamMember[] = [
    {
      name: t("members.sarah.name"),
      role: t("members.sarah.role"),
      bio: t("members.sarah.bio"),
      image: "/teams/gopal.webp",
      social: t("members.sarah.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.michael.name"),
      role: t("members.michael.role"),
      bio: t("members.michael.bio"),
      image: "/teams/sunita.webp",
      social: t("members.michael.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.emily.name"),
      role: t("members.emily.role"),
      bio: t("members.emily.bio"),
      image: "/teams/veera.webp",
      social: t("members.emily.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.david.name"),
      role: t("members.david.role"),
      bio: t("members.david.bio"),
      image: "/kanak.jpg",
      social: t("members.david.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.lisa.name"),
      role: t("members.lisa.role"),
      bio: t("members.lisa.bio"),
      image: "/kanak.jpg",
      social: t("members.lisa.social", { returnObjects: true }) as TeamMember["social"],
    },
    {
      name: t("members.james.name"),
      role: t("members.james.role"),
      bio: t("members.james.bio"),
      image: "/kanak.jpg",
      social: t("members.james.social", { returnObjects: true }) as TeamMember["social"],
    },
  ];

  return { teamMembers, t };
};
