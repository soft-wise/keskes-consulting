import ServiceLayout from "@/components/layout/ServiceLayout";
import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

export default async function AiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <ServiceLayout lang={locale} dict={dict} serviceKey="ai" />;
}
