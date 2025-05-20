import { draftMode } from "next/headers";
import Reproduction from "./reproduction";
import { Suspense } from "react";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const { isEnabled } = await draftMode();
  return (
    <div>
      <h1>BlurUp + Draft Mode Reproduction</h1>
      <h2>1. Enable draft mode</h2>
      {isEnabled ? (
        <p>
          Draft mode is enabled.{" "}
          <a href="/api/draft/disable">Disable draft mode</a>
        </p>
      ) : (
        <p>
          Draft mode is disabled.{" "}
          <a href="/api/draft/enable">Enable draft mode</a>
        </p>
      )}
      <h2>2. This hangs in draft mode (and in production, I think?)</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Reproduction />
      </Suspense>
    </div>
  );
}
