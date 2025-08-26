import { getDictionary } from "@/lib/i18n";

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const t = dict.About;

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

      {/* Company Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t.company.title}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                {t.company.paragraphs?.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.stats.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {t.stats.items?.map(
                  (it: { value: string; label: string }, idx: number) => (
                    <div className="text-center" key={idx}>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{it.value}</div>
                      <div className="text-gray-600 dark:text-gray-300">{it.label}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.items?.map(
              (it: { title: string; desc: string; icon?: string }, idx: number) => (
                <div className="text-center" key={idx}>
                  <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">{it.icon || "✅"}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{it.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{it.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t.capabilities.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.capabilities.items?.map(
              (it: { title: string; desc: string; icon?: string }, idx: number) => (
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center" key={idx}>
                  <div className="text-4xl mb-4">{it.icon || "🏭"}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{it.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{it.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t.quality.title}
              </h2>
              <div className="space-y-6">
                {t.quality.items?.map(
                  (it: { title: string; desc: string }, idx: number) => (
                    <div className="flex items-start space-x-4" key={idx}>
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                        <span className="text-blue-600 dark:text-blue-400">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{it.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{it.desc}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.cert.title}</h3>
              <div className="space-y-4">
                {t.cert.items?.map((s: string, idx: number) => (
                  <div className="flex items-center space-x-3" key={idx}>
                    <span className="text-2xl">🏆</span>
                    <span className="text-gray-700 dark:text-gray-300">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.contact.desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.contact.infoTitle}</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 dark:text-blue-400">📧</span>
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 dark:text-blue-400">📞</span>
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 dark:text-blue-400">📠</span>
                  <span className="text-gray-600 dark:text-gray-300">{t.contact.fax}</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t.contact.addressTitle}</h3>
              <div className="text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">📍</span>
                  <div className="text-gray-600 dark:text-gray-300">
                    {t.contact.addressLines?.map((line: string, idx: number) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}