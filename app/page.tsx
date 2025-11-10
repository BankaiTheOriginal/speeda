import Footer from "./components/footer";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
