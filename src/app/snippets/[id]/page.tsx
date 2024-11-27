import { db } from "@/db";

export default async function ViewSnippet({ params }: { params: any }) {
  const { id } = await params;
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  console.log(snippet);
  return (
    <div className="w-full h-screen bg-gray-800 absolute top-0 left-0 text-white">
      <div className="w-full h-fit">
        <h1 className="text-3xl text-center captilized">{snippet?.title}</h1>
        <h2>Code: {snippet?.code}</h2>
      </div>
    </div>
  );
}
