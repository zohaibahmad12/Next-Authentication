import { signoutUser } from "@/actions/user";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
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

const HomePage = async () => {
  const session = await auth();
  console.log("session is", session);
  if (!session) redirect("/login");
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form action={signoutUser}>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </form>
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
