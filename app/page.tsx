import { draftMode } from "next/headers";
import Reproduction from "./reproduction";
import { Suspense } from "react";

// this isn't required to reproduce the issue.
// however, with it enabled, the issue is isolated to the suspense boundary in prod,
// rather than taking the whole page down
export const dynamic = "force-dynamic";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const { isEnabled } = await draftMode();
  return (
    <div>
      <h1>BlurUp + Draft Mode Reproduction</h1>
      <h2>This hangs in production, and in draft mode</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Reproduction />
      </Suspense>
      <h2>Draft mode</h2>
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
    </div>
  );
}
