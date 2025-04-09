export default function Home() {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen gap-2">
        <div class="text-4xl font-bold">Seeker NZ</div>
        <div class="text-lg">Find your dream job in New Zealand</div>
        <a href="/searcher" class="bg-[#E70279] text-white px-4 py-2 rounded">
          Search for jobs
        </a>
        <a href="/cover" class="bg-[#E70279] text-white px-4 py-2 rounded">
          Create cover letter
        </a>
      </div>
    </>
  );
}
