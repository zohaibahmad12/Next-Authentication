import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
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
