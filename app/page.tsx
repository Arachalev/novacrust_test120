"use client";
import TopNav from "@/components/TopNav";
import ConvertCryptoForm from "@/components/ConvertCryptoForm";
import PayComponent from "@/components/PayComponent";

export default function Home() {
  return (
    <div className="max-w-[640px]  flex flex-col min-h-screen w-full items-center bg-white">
      <div className="mt-20">
        <TopNav />
      </div>
      <div className="p-16 flex flex-col items-center gap-10">
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
