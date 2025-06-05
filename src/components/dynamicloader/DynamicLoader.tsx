import React from "react";
import { useFaqStore } from "../../store/faqStore.tsx";

type ComponentsMap<P extends object = object> = {
  [label: string]: React.ComponentType<P>;
};

interface DynamicLoaderProps<P extends object = object> {
  components: ComponentsMap<P>;
}

export default function DynamicLoader<P extends object = object>({
  components,
}: DynamicLoaderProps<P>) {
  const { selectedTopic } = useFaqStore(); // Get selectedTopic from the store

  const topicToComponentKey: Record<string, string> = {
    "General Grooming Questions": "general",
    "Bathing & Skin Care": "bathing",
    "Haircuts & Styling": "haircut",
    "Nail & Paw Care": "nail",
    "Safety & Comfort": "safety",
    "Appointments & Policies": "appointments",
  };

  const componentKey = selectedTopic
    ? topicToComponentKey[selectedTopic]
    : undefined;
  const ActiveComponent = componentKey ? components[componentKey] : undefined;

  return (
    <div>
      {ActiveComponent ? (
        <ActiveComponent {...({} as P)} />
      ) : (
        <p>Please select a view</p>
      )}
    </div>
  );
}
