"use client";
import { useLoading } from "@/hooks/Loading/useLoading";
import LoadingOverlay from "@/components/common/LoadingOverlay/LoadingOverlay";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading(1500);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {!isLoading && children}
    </>
  );
}
