import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TRX-9823",
    service: "Vehicle Tax",
    date: "2024-05-20",
    amount: "Rs. 12,500",
    status: "completed",
    method: "eSewa",
  },
  {
    id: "TRX-9822",
    service: "Passport Application",
    date: "2024-05-18",
    amount: "Rs. 5,000",
    status: "pending",
    method: "Khalti",
  },
  {
    id: "TRX-9821",
    service: "Electricity Bill",
    date: "2024-05-15",
    amount: "Rs. 1,200",
    status: "completed",
    method: "ConnectIPS",
  },
  {
    id: "TRX-9820",
    service: "Traffic Fine",
    date: "2024-05-10",
    amount: "Rs. 500",
    status: "completed",
    method: "eSewa",
  },
  {
    id: "TRX-9819",
    service: "Land Tax (Malpot)",
    date: "2024-05-01",
    amount: "Rs. 2,500",
    status: "failed",
    method: "ConnectIPS",
  },
];

export default function Transactions() {
  // const { t } = useLanguage();

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-text-main">
          Transaction History
        </h2>
        <p className="text-text-muted">View and manage your payment history.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((trx) => (
                <TableRow key={trx.id}>
                  <TableCell className="font-medium">{trx.id}</TableCell>
                  <TableCell>{trx.service}</TableCell>
                  <TableCell>{trx.date}</TableCell>
                  <TableCell>{trx.method}</TableCell>
                  <TableCell>{trx.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        trx.status === "completed"
                          ? "default"
                          : trx.status === "pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        trx.status === "completed"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : trx.status === "pending"
                          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                          : "bg-red-100 text-red-700 hover:bg-red-100"
                      }
                    >
                      {trx.status.charAt(0).toUpperCase() + trx.status.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
