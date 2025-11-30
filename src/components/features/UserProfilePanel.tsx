import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UserProfilePanel() {
  return (
    <div className="flex h-full flex-col gap-6 border-l border-border bg-card p-6">
      {/* User Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <Avatar className="h-24 w-24 border-4 border-primary/10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Sandeep Shrestha"
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 rounded-full bg-green-500 p-1.5 border-2 border-background"></div>
        </div>
        <h2 className="text-xl font-bold text-foreground">Sandeep Shrestha</h2>
        <p className="text-sm text-muted-foreground">sandeep@example.com</p>
        <p className="text-sm text-muted-foreground">+977-9800000000</p>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </div>

      {/* Notification Center */}
      <Card className="border-none shadow-none bg-muted/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" /> Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <div className="h-2 w-2 mt-1.5 rounded-full bg-red-500 shrink-0" />
            <div>
              <p className="font-medium text-foreground">License Printed</p>
              <p className="text-xs text-muted-foreground">
                Your license is ready for collection.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <div className="h-2 w-2 mt-1.5 rounded-full bg-blue-500 shrink-0" />
            <div>
              <p className="font-medium text-foreground">KYC Verified</p>
              <p className="text-xs text-muted-foreground">
                Your bank KYC has been verified.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Log */}
      <div className="flex-1">
        <h3 className="mb-4 font-semibold text-foreground">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              action: "Paid Electricity Bill",
              time: "2 hours ago",
              amount: "Rs. 1,200",
            },
            {
              action: "Passport Application",
              time: "Yesterday",
              status: "Submitted",
            },
            { action: "Logged In", time: "Yesterday", device: "MacBook Pro" },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-border pb-3 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <div className="text-right">
                {activity.amount && (
                  <p className="text-sm font-bold text-red-600">
                    -{activity.amount}
                  </p>
                )}
                {activity.status && (
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                    {activity.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
