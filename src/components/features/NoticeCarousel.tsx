import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const notices = [
  {
    id: 1,
    title: "Tax Filing Deadline Extended",
    description:
      "The deadline for vehicle tax filing has been extended to end of this month.",
    date: "2024-05-20",
    type: "important",
  },
  {
    id: 2,
    title: "New Passport Rules",
    description: "E-Passport application now requires National ID card number.",
    date: "2024-05-18",
    type: "info",
  },
  {
    id: 3,
    title: "System Maintenance",
    description:
      "Nagarik App services will be down for maintenance on Saturday 10 PM - 12 AM.",
    date: "2024-05-15",
    type: "warning",
  },
];

export function NoticeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % notices.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length);

  return (
    <Card className="relative overflow-hidden border-l-4 border-l-primary bg-linear-to-r from-primary/5 to-transparent">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Bell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-primary">
                {notices[currentIndex].title}
              </h3>
              <span className="text-xs text-text-muted">
                {notices[currentIndex].date}
              </span>
            </div>
            <p className="mt-1 text-sm text-text-main">
              {notices[currentIndex].description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
