"use client";
import TopNav from "@/components/TopNav";
import ConvertCryptoForm from "@/components/ConvertCryptoForm";
import PayComponent from "@/components/PayComponent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-s w-full items-center justify-center bg-white">
      <div className="p-16 flex flex-col items-center gap-10">
        <TopNav />
        <div className="flex flex-col gap-6">
          <ConvertCryptoForm pay />

          <ConvertCryptoForm pay={false} />
          <PayComponent pay />
          <PayComponent pay={false} />
        </div>
      </div>
    </div>
  );
}
