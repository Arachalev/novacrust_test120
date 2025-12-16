"use client";
import TopNav from "@/components/TopNav";
import ConvertCryptoForm from "@/components/ConvertCryptoForm";
import PayComponent from "@/components/PayComponent";

export default function Home() {
  return (
    <div className="max-w-[640px] flex flex-col min-h-screen w-screen items-center bg-white overflow-y-scroll overflow-x-hidden">
      <div className="mt-20">
        <TopNav />
      </div>
      <div className="p-4 w-full px-4 sm:p-16 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-6 w-full   ">
          <ConvertCryptoForm pay />

          <ConvertCryptoForm pay={false} />
          <PayComponent pay />
          <PayComponent pay={false} />
        </div>
      </div>
    </div>
  );
}
