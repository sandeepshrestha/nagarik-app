import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceCard } from "@/components/features/ServiceCard";
import { Input } from "@/components/ui/input";
import { Search, FileText, CreditCard, User, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    {
      id: "passport",
      title: "Passport Application",
      description: "Apply for a new passport or renew your existing one.",
      icon: FileText,
      timeEstimate: "3-5 Days",
      fee: "Rs. 5,000",
    },
    {
      id: "license",
      title: "Driving License",
      description: "Apply for a new driving license or add a category.",
      icon: CreditCard,
      timeEstimate: "1 Day (Biometrics)",
      fee: "Rs. 1,500",
    },
    {
      id: "pan",
      title: "PAN Registration",
      description: "Register for a Permanent Account Number (PAN).",
      icon: User,
      timeEstimate: "Instant",
      fee: "Free",
    },
    {
      id: "company",
      title: "Company Registration",
      description: "Register a new company or update details.",
      icon: Building,
      timeEstimate: "7 Days",
      fee: "Rs. 1,000+",
    },
    {
      id: "birth",
      title: "Birth Certificate",
      description: "Register a birth and get the official certificate.",
      icon: FileText,
      timeEstimate: "1 Day",
      fee: "Rs. 500",
    },
    {
      id: "marriage",
      title: "Marriage Certificate",
      description: "Register your marriage legally.",
      icon: FileText,
      timeEstimate: "1 Day",
      fee: "Rs. 1,000",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-text-main">{t("services")}</h2>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <Input
            placeholder={t("searchServices")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            onApply={() => navigate(`/services/${service.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
