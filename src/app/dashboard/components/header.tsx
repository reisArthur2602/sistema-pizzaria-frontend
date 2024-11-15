"use client";

import Link from "next/link";

import { LINKS_HEADER_DASHBOARD } from "@/contants/links";
import LogoutButton from "./logout-button";

const Header = () => {
  return (
    <header className="bg-primary shadow-sm print:hidden">
      <nav className="flex h-14 items-center justify-between px-8 text-white">
        <Link href={"/dashboard"} className="text-xl font-bold text-white">
          Painel Administrativo
        </Link>

        <div className="flex items-center gap-6">
          {LINKS_HEADER_DASHBOARD.map((link) => (
            <Link href={link.path} key={link.label}>
              {link.label}
            </Link>
          ))}
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
