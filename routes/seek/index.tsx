export default function Home() {
  const search_terms = ["developer", "javascript"];
  return (
    <>
      <h1>Seek Scraper</h1>
      <div>{search_terms.map((s) => <li>{s}</li>)}</div>
    </>
  );
}
