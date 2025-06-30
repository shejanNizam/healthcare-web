export default function SeoLinks() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h3 className="text-lg font-semibold mb-4">
        Healthcare Staffing Services
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { text: "Travel Nurse Staffing", url: "/travel-nurses" },
          { text: "Per Diem Nursing", url: "/per-diem-nurses" },
          { text: "CNA Staffing Solutions", url: "/cna-staffing" },
          { text: "LVN Staffing California", url: "/lvn-staffing" },
          { text: "Hospital Staffing Agency", url: "/hospital-staffing" },
          { text: "SNF Staffing Services", url: "/snf-staffing" },
        ].map((link, i) => (
          <a key={i} href={link.url} className="text-primary hover:underline">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}
