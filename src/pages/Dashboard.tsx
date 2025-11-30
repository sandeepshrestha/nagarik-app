import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NoticeCarousel } from "@/components/features/NoticeCarousel";
import { UserProfilePanel } from "@/components/features/UserProfilePanel";
import {
  documentServices,
  socialServices,
  otherServices,
} from "@/data/servicesData";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { t } = useLanguage();

  const ServiceGrid = ({
    title,
    services,
  }: {
    title: string;
    services: any[];
  }) => (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-text-main">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <Link key={service.title} to={service.link}>
            <Card className="h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md border-gray-100">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div className={`mb-3 rounded-full p-3 ${service.bg}`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h4 className="text-sm font-medium text-text-main line-clamp-2">
                  {service.title}
                </h4>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Main Content Area - 75% width on large screens */}
      <div className="flex-1 overflow-y-auto p-6 lg:w-3/4">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-text-main">
                {t("welcome")}, Sandeep
              </h2>
              <p className="text-text-muted">
                Access all government services in one place.
              </p>
            </div>
            <Button>{t("startApplication")}</Button>
          </div>

          {/* Notices */}
          <NoticeCarousel />

          {/* Documents Section */}
          <ServiceGrid title="My Documents" services={documentServices} />

          {/* Social Services Section */}
          <ServiceGrid title="Social Services" services={socialServices} />

          {/* Other Services Section */}
          <ServiceGrid title="Other Services" services={otherServices} />
        </div>
      </div>

      {/* Right Panel - 25% width, hidden on mobile */}
      <div className="hidden w-80 lg:block">
        <UserProfilePanel />
      </div>
    </div>
  );
}
