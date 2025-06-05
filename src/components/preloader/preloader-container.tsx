"use client";
import Preloader from "../preloader/Preloader";
import { usePreloaderStore } from "../../store/preloaderStore";
export default function PreloaderContainer() {
  const { ispreloading } = usePreloaderStore();

  return <>{ispreloading && <Preloader />}</>;
}
