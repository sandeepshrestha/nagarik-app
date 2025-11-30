import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";

export default function ServiceDetails() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, fetch based on ID
  const service = {
    title: "Passport Application",
    description: "Apply for a new machine-readable passport or e-passport.",
    requirements: [
      "Original Citizenship Certificate",
      "Marriage Certificate (if applicable)",
      "Migration Certificate (if applicable)",
      "National ID Number",
    ],
    fees: [
      { type: "Normal (30 days)", amount: "Rs. 5,000" },
      { type: "Urgent (3 days)", amount: "Rs. 12,000" },
    ],
    timeEstimate: "3-30 Days",
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate("/services")}
        className="pl-0 hover:bg-transparent hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </Button>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-text-main">
              {service.title}
            </h2>
            <p className="mt-2 text-text-muted">{service.description}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("requirements")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <span className="text-text-main">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("fees")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {service.fees.map((fee, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-text-main">{fee.type}</span>
                    <span className="font-semibold text-text-main">
                      {fee.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-80">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 text-text-muted">
                <Clock className="h-5 w-5" />
                <span>{service.timeEstimate}</span>
              </div>
              <Button
                onClick={() => navigate(`/services/${id}/apply`)}
                className="w-full"
              >
                {t("startApplication")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
