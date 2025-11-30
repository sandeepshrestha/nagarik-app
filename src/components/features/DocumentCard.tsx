import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentCardProps {
  title: string;
  idNumber: string;
  issueDate: string;
  type: "citizenship" | "license" | "pan" | "voter";
}

export function DocumentCard({
  title,
  idNumber,
  issueDate,
  type,
}: DocumentCardProps) {
  const getBgColor = () => {
    switch (type) {
      case "citizenship":
        return "bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/20";
      case "license":
        return "bg-orange-50 border-orange-100 dark:bg-orange-900/10 dark:border-orange-900/20";
      case "pan":
        return "bg-blue-50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/20";
      case "voter":
        return "bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-900/20";
      default:
        return "bg-muted/50 border-border";
    }
  };

  return (
    <Card className={`transition-all hover:shadow-md ${getBgColor()}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold text-foreground">
          {title}
        </CardTitle>
        <QrCode className="h-6 w-6 text-text-muted opacity-50" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground">ID Number</p>
            <p className="font-mono text-sm font-medium">{idNumber}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Issued Date</p>
            <p className="text-sm font-medium">{issueDate}</p>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40"
            >
              <Eye className="mr-2 h-3 w-3" /> View
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-white/50 hover:bg-white dark:bg-black/20 dark:hover:bg-black/40"
            >
              <QrCode className="mr-2 h-3 w-3" /> QR
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
