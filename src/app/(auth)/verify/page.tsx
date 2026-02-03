import { Suspense } from "react";
import VerifyEmailClient from "./VerifyEmailClient";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailClient />
    </Suspense>
  );
}
