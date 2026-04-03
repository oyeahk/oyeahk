"use client";

import Link from "next/link";

const socials = [
  {
    name: "YouTube",
    href: "https://youtube.com/@oyeahk",
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/oyeahk",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@oyeahk",
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/_oyeahk",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/oyeahk",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        
        {/* Affiliate Disclaimer */}
        <p className="text-sm text-zinc-400 text-center max-w-md">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>

        {/* Brand */}
        <div className="text-sm text-zinc-500 text-center">
          oyeahk © {new Date().getFullYear()} | All rights reserved
        </div>
      </div>
    </footer>
  );
}
