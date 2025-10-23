import { Twitter, Instagram, Facebook } from "lucide-react";

interface SocialIcon {
  icon?: React.ReactNode;
}

const socialIcons: SocialIcon[] = [
  {
    icon: <Twitter size={16} />,
  },
  {
    icon: <Instagram size={16} />,
  },
  {
    icon: <Facebook size={16} />,
  },
];

export function Socials() {
  return (
    <div className="flex items-center gap-2 mt-5">
      <p className="text-gray-400 text-xs">Socials |</p>
      <div className="flex items-center gap-1">
        {socialIcons.map((social, index) => (
          <div
            className="text-gray-400 hover:text-black transition-all duration-300 hover:cursor-pointer"
            key={index}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
