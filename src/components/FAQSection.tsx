"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CustomHeading from "./CustomHeading";

interface FAQ {
  _id: string;
  question: string;
  ans: string;
}

interface FAQSectionProps {
  faqData: FAQ[];
}

export default function FAQSection({ faqData }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-white pb-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <CustomHeading text="Frequently Asked Questions" />
          <p className="text-gray-600">Common questions, clear answers.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq._id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="cursor-pointer w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(faq._id)}
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </h3>
                {openFAQ === faq._id ? (
                  <FaChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openFAQ === faq._id && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className=" pt-3 text-md">{faq.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
