"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
}

export default function FAQItem({ id, question, answer }: FAQItemProps) {
  return (
    <AccordionItem value={id} className="border-b border-gray-200">
      <AccordionTrigger className="text-left hover:text-[#3B82F6] transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-[#6B7280]">{answer}</AccordionContent>
    </AccordionItem>
  );
}

