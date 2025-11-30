import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Banknote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  timeEstimate: string;
  fee: string;
  onApply: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  timeEstimate,
  fee,
  onApply,
}: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-col gap-2 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{timeEstimate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Banknote className="h-4 w-4" />
            <span>{fee}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onApply} className="w-full">
          {t("apply")} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
