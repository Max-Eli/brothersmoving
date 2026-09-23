"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icons";

/** Mobile-only conversion bar. Appears once the header CTA has scrolled away. */
export default function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2.5">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-[15px] font-semibold text-white"
        >
          <Icon.phone className="size-4" />
          Call now
        </a>
        <Link
          href="/quote"
          className="flex flex-1 items-center justify-center rounded-xl bg-amber-brand-600 px-4 py-3 text-[15px] font-semibold text-white"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
