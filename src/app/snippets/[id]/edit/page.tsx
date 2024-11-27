import { db } from "@/db";
import { redirect } from "next/navigation";

export default async function EditSnippet({ params }: { params: any }) {
  const { id } = await params;
  const snippet = await db.snippet.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  async function editSnippet(formData: FormData) {
    "use server";
    const newCode = formData.get("code") as string;

    const newSnippet = await db.snippet.update({
      where: {
        id: parseInt(id),
      },
      data: {
        code: newCode,
      },
    });
    redirect("/snippets/" + id);
  }
  return (
    <form action={editSnippet}>
      <h3 className="text-center text-3xl font-bold m-5">Edit The Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
            defaultValue={snippet?.code}
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
