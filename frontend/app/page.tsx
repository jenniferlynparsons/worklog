"use client";

import Form from "next/form";
import { useEffect, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [submitting, setSubmitting] = useState<SubmissionState>("idle");
  const [entries, setEntries] = useState<
    Array<{ id: number; title: string; created_at: string }>
  >([]);

  async function fetchEntries() {
    try {
      const response = await fetch("/api/entries");
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error("Failed to fetch entries:", error);
    }
  }

  useEffect(() => {
    if (submitting === "success") {
      const timer = setTimeout(() => {
        setSubmitting("idle");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitting]);

  useEffect(() => {
    fetchEntries();
  }, []);

  function delay(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title === "") return;

    try {
      setSubmitting("submitting");
      const response = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        setSubmitting("error");
        return;
      }

      const newEntry = await response.json();
      setEntries([newEntry, ...entries]); // Add new entry to top of list
      setTitle("");
      setSubmitting("success");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-6 sm:px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <Form
            action="#"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="w-full"
          >
            <div className="flex w-full items-center gap-3">
              <input
                id="post"
                name="post"
                placeholder="I did some work"
                className="flex-1 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500 dark:focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              {{
                idle: "Tip: This should be a celebration not a funeral",
                submitting: "Your post is processing",
                success: "Posted! 🎉",
                error: "Something went wrong. Please try again.",
              }[submitting] ?? null}
            </p>
          </Form>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Entries</h2>
          {entries.length === 0 ? (
            <p className="text-zinc-500">
              No entries yet. Start tracking your work!
            </p>
          ) : (
            <div className="space-y-2">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
                >
                  <p className="font-medium">{entry.title}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {new Date(entry.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
