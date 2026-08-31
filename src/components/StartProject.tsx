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
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }}
    >
      {children}
    </a>
  );
}
