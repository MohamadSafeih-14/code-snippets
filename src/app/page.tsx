import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="bg-black p-5 w-[60%] mx-auto text-white text-center m-3"
      >
        <h1>{snippet.title}</h1>
        <h2 className="text-blue-600">- {snippet.code}</h2>
      </div>
    );
  });
  return <div>{renderedSnippets}</div>;
}
