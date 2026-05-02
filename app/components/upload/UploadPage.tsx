import Link from "next/link";
import Header from "../header"

export default function UploadPage() {
  return (
    <main>
      <Header />
      <h1>Upload Page</h1>

      <nav>
        <Link href="/">Back to Gallery</Link>
      </nav>
    </main>
  );
};
