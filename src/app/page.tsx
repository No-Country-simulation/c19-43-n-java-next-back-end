import Navbar from "@/components/Navbar";
import Login from "@/components/Login"
import Register from "@/components/Register";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Navbar />
      <Login/>
      <Register/>
    </main>
  );
}
