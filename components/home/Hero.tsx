import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

const Hero = async ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  const dict = await getDictionary(langName);
  const p = dict.Products;

  const sloganMap: Record<string, string> = {
    zh: "可靠连接，驱动未来",
    en: "Reliable connections that power the future",
    ja: "信頼の接続で未来を動かす",
    ar: "وصلات موثوقة تقود المستقبل",
    es: "Conexiones fiables que impulsan el futuro",
    ru: "Надёжные соединения, двигающие будущее",
  };
  const slogan = (dict?.Hero as any)?.slogan || sloganMap[langName] || sloganMap.en;

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}
      <section
        lang={langName}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center"
      >
        <h1>
          <LineText>{slogan}</LineText>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {p.heroDesc}
        </p>
      </section>
      {/* </motion.div> */}
      <div className="flex justify-center gap-4">
        <CTAButton locale={CTALocale}></CTAButton>
        <Button variant="outline">
          <Link href={`/${langName}/products`} className="flex items-center gap-2">
            {locale.viewProducts}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;
