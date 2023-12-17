import Footer from "../components/Footer.tsx";
import Count from "../islands/Count.tsx";

export default function Home() {
  const search_terms = ["developer", "javascript"];

  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2">
          <h1 class="text-4xl font-bold pb-4">The Seeker</h1>
          <div>{search_terms.map((s) => <Count searchTerm={s} />)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
