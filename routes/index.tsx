import App from "../islands/App.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2">
          <App />
        </div>
      </div>
      <Footer />
    </>
  );
}
