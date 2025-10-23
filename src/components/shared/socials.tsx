import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

interface SocialIcon {
  icon?: React.ReactNode;
  href?: string;
}

const socialIcons: SocialIcon[] = [
  {
    icon: <Twitter size={24} />,
    href: "#",
  },
  {
    icon: <Facebook size={24} />,
    href: "#",
  },
  {
    icon: <Instagram size={24} />,
    href: "#",
  },
];

export function Socials() {
  return (
    <div className="flex items-center mt-5">
      <div className="flex items-center gap-1">
        {socialIcons.map((social, index) => (
          <Link
            href={social.href as string}
            className="text-gray-400 hover:text-black transition-all duration-300 hover:cursor-pointer"
            key={index}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
