import { useAtom } from "jotai";
import { globalModalAtom } from "@/store/atoms";
import { useEffect } from "react";

export default function useGlobalModalState() {
  const [isOpen, setOpen] = useAtom(globalModalAtom);

  useEffect(() => {
    console.log("what is global modal state", isOpen);
  }, [isOpen]);
  return { isOpen, setOpen };
}
