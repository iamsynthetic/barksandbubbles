import { create } from "zustand";

interface FaqStore {
  selectedTopic: string | null;
  setSelectedTopic: (topic: string) => void;
}

export const useFaqStore = create<FaqStore>((set) => ({
  selectedTopic: "General Grooming Questions",
  setSelectedTopic: (topic) => set({ selectedTopic: topic }),
}));
