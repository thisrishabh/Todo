import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <AddTodo />
     <Todos />
     </main>
  );
}
