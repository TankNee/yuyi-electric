import { getDictionary } from "@/lib/i18n";

export default async function ProductsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const t = dict.Products;

  // 产品清单基于实际图片文件名对齐描述与参数
  const products = [
    {
      model: "UK-2.5B",
      image: "/images/products/uk-2.5B.png",
      alt: "UK-2.5B 通用接线端子",
      specs: {
        crossSection: "2.5mm²",
        current: "32A",
        voltage: "800V",
        range: "刚性 0.2–4mm² / 柔性 0.2–2.5mm²",
        thickness: "6.2mm",
      },
    },
    {
      model: "MBKKB2.5",
      image: "/images/products/MBKKB2.5.png",
      alt: "MBKKB2.5 接线端子",
      specs: {
        crossSection: "2.5mm²",
        current: "32A",
        voltage: "500V",
        range: "刚性 0.2–4mm² / 柔性 0.2–2.5mm²",
        thickness: "5.2mm",
      },
    },
    {
      model: "UK-3N",
      image: "/images/products/uk-3N.png",
      alt: "UK-3N 通用接线端子",
      specs: {
        crossSection: "—",
        current: "32A",
        voltage: "800V",
        range: "刚性 0.2–4mm² / 柔性 0.2–2.5mm²",
        thickness: "5.2mm",
      },
    },
  ] as const;

  const specHeaders = [
    ...(t?.specs?.headers || ["型号", "截面积", "额定电流", "额定电压", "导线范围"]),
    lang === "zh" ? "厚度" : "Thickness",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight break-words font-bold text-gray-900 dark:text-white mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {t.features.items?.map(
              (it: { title: string; desc: string }, idx: number) => (
                <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md" key={idx}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{it.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{it.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.heroTitle}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((p, idx) => (
                <div
                  key={p.model || idx}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4 sm:p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="w-full max-w-xs h-auto aspect-[16/10] object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold break-words text-gray-900 dark:text-white mb-2">
                        {p.model}
                      </h3>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1 mb-4 text-sm">
                        {p.specs.crossSection && <li>截面积: {p.specs.crossSection}</li>}
                        <li>额定电流: {p.specs.current}</li>
                        <li>额定电压: {p.specs.voltage}</li>
                        <li>导线范围: {p.specs.range}</li>
                        <li>厚度: {p.specs.thickness}</li>
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="mailto:info@yuyi.neeto.cn"
                          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.cta.emailBtn}
                        </a>
                        <a
                          href="tel:+86-13868776106"
                          className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.cta.phoneBtn}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.specs.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {specHeaders.map((h: string) => (
                    <th key={h} className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {products.map((p, idx) => (
                  <tr key={p.model || idx}>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.model}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.specs.crossSection || "-"}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.specs.current}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.specs.voltage}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.specs.range}
                    </td>
                    <td className="px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap break-words text-sm text-gray-900 dark:text-white">
                      {p.specs.thickness}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.applications.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.applications.items?.map(
              (it: { title: string; desc: string; icon?: string }, idx: number) => (
                <div className="text-center" key={idx}>
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{it.icon || "⚙️"}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{it.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{it.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@yuyi.neeto.cn"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.cta.emailBtn}
            </a>
            <a
              href="tel:+86-13868776106"
              className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.cta.phoneBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}