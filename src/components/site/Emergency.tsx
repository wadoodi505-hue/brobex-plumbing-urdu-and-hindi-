import { Phone } from "lucide-react";
import emergencyBg from "@/assets/emergency-bg.jpg";
import { Reveal } from "./Reveal";
import { LuxLink, LuxRouteLink } from "./LuxButton";
import { BRAND } from "./brand";

export function Emergency() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <img
        src={emergencyBg}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        loading="lazy"
        className="ken-burns absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,oklch(0.16_0.008_60/60%),oklch(0.16_0.008_60/95%))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">Emergency Plumbing · ہنگامی پلمبنگ خدمات</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Plumbing Emergency? <span className="text-metal">We&rsquo;re Ready to Help.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Contact BroBax for dependable help with leaks, blocked drains and urgent water-line problems. <span className="block mt-2 text-right" lang="ur" dir="rtl">لیکج، بند نالی یا پانی کی لائن کے فوری مسئلے کے لیے رابطہ کریں۔</span>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LuxLink href={BRAND.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BRAND.phoneDisplay} · کال کریں
            </LuxLink>
            <LuxRouteLink to="/contact" variant="outline">
              Request a Service · سروس بک کریں
            </LuxRouteLink>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "First priority · پہلا قدم", v: "Isolate the supply and limit damage. پانی کی سپلائی بند کرکے نقصان کم کریں۔" },
              { k: "Then · اس کے بعد", v: "Diagnose the issue and explain the cost first. مسئلہ سمجھ کر کام سے پہلے لاگت بتائیں۔" },
              { k: "Before we leave · کام کے بعد", v: "Test the repair and explain the result. مرمت چیک کریں اور کام کی وضاحت کریں۔" },
            ].map((d) => (
              <div
                key={d.k}
                className="glass glow-ring rounded-2xl p-5 text-left transition-transform duration-500 hover:-translate-y-1"
              >
                <dt className="eyebrow">{d.k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{d.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
