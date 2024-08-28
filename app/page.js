import connectDB from "@/lib/db";
export default function Home() {
  connectDB();
  return <h1>Home PAGE</h1>;
}
