import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

export default function VerifyPage() {
  return (
    <>
      {/* <h1>Verify page</h1>
      <p>This page is intended to verify that Redux state is persisted across page navigations.</p> */}
    </>
  );
}
