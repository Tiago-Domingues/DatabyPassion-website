"use client";

import { useModal } from "@/components/ModalProvider";

export function StartProject({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      className={className}
      onClick={openModal}
    >
      {children}
    </button>
  );
}
