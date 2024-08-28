import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
const stats = [
  { label: "Total Signups", value: 150 },
  { label: "Active Users", value: 120 },
  { label: "Pending Requests", value: 30 },
];

const recentSignups = [
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Smith", email: "jane.smith@example.com" },
  { name: "Alice Johnson", email: "alice.johnson@example.com" },
  { name: "Bob Brown", email: "bob.brown@example.com" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white shadow-lg rounded-lg p-4">
            <CardHeader>
              <h2 className="text-xl font-semibold">hi</h2>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">hello</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Signups Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Recent Signups</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSignups.map((signup, index) => (
                <TableRow key={index}>
                  <TableCell>{signup.name}</TableCell>
                  <TableCell>{signup.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
