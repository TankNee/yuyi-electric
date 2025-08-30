import { getDictionary } from "@/lib/i18n";

export default async function ProductsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const t = dict.Products;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items?.map(
              (it: { title: string; desc: string }, idx: number) => (
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" key={idx}>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.specs.rows?.map((row: string[], idx: number) => {
              const headers = t.specs.headers || [];
              const model = row[0] as string;
              const slug = (model || "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "");
              const priceList = ["$59", "$69", "$79", "$89", "$99", "$109", "$119", "$129"];
              const price = priceList[idx % priceList.length];

              return (
                <div
                  key={model || idx}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                      <img
                        src={`/images/products/${slug}.png`}
                        alt={model}
                        className="w-64 h-40 object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        {model}
                      </h3>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1 mb-4 text-sm">
                        <li>{headers?.[1]}: {row[1]}</li>
                        <li>{headers?.[2]}: {row[2]}</li>
                        <li>{headers?.[3]}: {row[3]}</li>
                        <li>{headers?.[4]}: {row[4]}</li>
                      </ul>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-blue-600">{price}</span>
                        <span className="text-sm text-gray-400 line-through">
                          {price === "$59" ? "$79" : "$139"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="mailto:info@yuyi-electric.com"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.cta.emailBtn}
                        </a>
                        <a
                          href="tel:+86-577-12345678"
                          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.cta.phoneBtn}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {t.specs.headers?.map((h: string) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {t.specs.rows?.map((row: string[], idx: number) => (
                  <tr key={idx}>
                    {row.map((cell: string, cidx: number) => (
                      <td key={cidx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {cell}
                      </td>
                    ))}
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
              href="mailto:info@yuyi-electric.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.cta.emailBtn}
            </a>
            <a
              href="tel:+86-577-12345678"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.cta.phoneBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}