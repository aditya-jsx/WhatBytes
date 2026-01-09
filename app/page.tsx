import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Footer />
      </div>
    </>
  );
}
