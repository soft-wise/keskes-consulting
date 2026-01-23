import { StructuredData } from "./structured-data";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaProps {
  faqs: FAQItem[];
  name?: string;
  description?: string;
}

export function FAQSchema({ faqs, name, description }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    description,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}
