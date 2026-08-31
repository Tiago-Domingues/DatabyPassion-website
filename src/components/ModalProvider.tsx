"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type ModalCtx = { open: boolean; openModal: () => void; closeModal: () => void };
const Ctx = createContext<ModalCtx | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return <Ctx.Provider value={{ open, openModal, closeModal }}>{children}</Ctx.Provider>;
}

export function useModal() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useModal");
  return v;
}
