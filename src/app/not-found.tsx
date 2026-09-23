import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { primaryAreas } from "@/lib/areas";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-amber-brand-700">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy-950 sm:text-5xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-navy-600">
          The link may be out of date, or the page may have moved. Here is where most people are
          heading — or call us and we will point you in the right direction.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a free quote
            <Icon.arrow className="size-4.5" />
          </Button>
          <Button href={site.phoneHref} variant="ghost" size="lg">
            <Icon.phone className="size-4.5" />
            {site.phoneDisplay}
          </Button>
        </div>

        <div className="mt-16 grid gap-8 text-left sm:grid-cols-2">
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
              Moving services
            </h2>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[15px] font-medium text-navy-700 transition hover:text-amber-brand-700"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">
              Areas we serve
            </h2>
            <ul className="mt-4 space-y-2">
              {primaryAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas-we-serve/${a.slug}`}
                    className="text-[15px] font-medium text-navy-700 transition hover:text-amber-brand-700"
                  >
                    Movers in {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-100 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-amber-brand-700 hover:text-amber-brand-900"
          >
            Back to the homepage
            <Icon.arrow className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
