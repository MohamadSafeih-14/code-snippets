import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <h1>{snippet.title}</h1>
      </div>
    );
  });
  return <div>{renderedSnippets}</div>;
}
