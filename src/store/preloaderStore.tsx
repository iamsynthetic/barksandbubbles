import { create } from "zustand";

interface PreloaderStore {
  // Back button
  // resetconfirm: boolean | null;
  // setResetConfirm: (resetconfirm: boolean) => void;

  isfirstload: boolean | null;
  setIsfirstload: (isfirstload: boolean) => void;

  // Bathing
  // bathinglabel: string | null;
  // bathingprice: string | null;
  // bathingbody: string | null;
  // setBathingSelected: (label: string, price: string, body: string) => void;

  ispreloading: boolean | null;
  setIsPreloading: (label: boolean) => void;
}

export const usePreloaderStore = create<PreloaderStore>((set) => ({
  // back button
  isfirstload: true,
  setIsfirstload: (label) =>
    set({
      isfirstload: label,
    }),

  // Bathing
  ispreloading: true,
  setIsPreloading: (label) =>
    set({
      ispreloading: label,
    }),
}));
