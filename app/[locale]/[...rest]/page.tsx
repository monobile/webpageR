import { notFound } from "next/navigation";

/** Any path below /{locale}/ that is not a known route renders the 404 page. */
export default function CatchAll() {
  notFound();
}
