import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 4rem - 0.667px)" }}>
      <main className="container h-full">{children}</main>
    </div>
  );
}
