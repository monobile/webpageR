import { notFound } from "next/navigation";
import { isLocale, getMessages } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyOrderBar from "@/components/layout/StickyOrderBar";
import Hero from "@/components/hero/Hero";
import BrandIntro from "@/components/hero/BrandIntro";
import SignaturePlov from "@/components/menu/SignaturePlov";
import MenuSection from "@/components/menu/MenuSection";
import DeliverySection from "@/components/delivery/DeliverySection";
import CateringSection from "@/components/catering/CateringSection";
import LocationsSection from "@/components/locations/LocationsSection";
import FinalCta from "@/components/layout/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Header locale={locale} t={t} />
      <main id="main">
        <Hero locale={locale} t={t} />
        <BrandIntro t={t} />
        <SignaturePlov locale={locale} t={t} />
        <MenuSection locale={locale} t={t} />
        <DeliverySection t={t} />
        <CateringSection locale={locale} t={t} />
        <LocationsSection locale={locale} t={t} />
        <FinalCta t={t} />
      </main>
      <Footer locale={locale} t={t} />
      <StickyOrderBar t={t} />
    </>
  );
}
