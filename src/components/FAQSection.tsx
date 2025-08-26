"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Define types for the FAQ data
interface FAQ {
  _id: string;
  question: string;
  ans: string;
}

interface FAQSectionProps {
  faqData: FAQ[];
  faqImage: string;
}

export default function FAQSection({ faqData, faqImage }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Common questions, clear answers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="text-center">
            <Image
              src={faqImage}
              alt="FAQ illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq._id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(faq._id)}
                >
                  <h3 className="font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {openFAQ === faq._id ? (
                    <FaChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === faq._id && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 pt-3">{faq.ans}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
