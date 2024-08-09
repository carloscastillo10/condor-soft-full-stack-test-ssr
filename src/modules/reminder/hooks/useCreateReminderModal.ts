import { useCallback, useRef, useState } from "react";
import { type ModalPosition } from "../types";

const useCreateReminderModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<ModalPosition | null>(
    null,
  );

  const adjustModalPosition = useCallback((position: ModalPosition) => {
    const modalWidth = modalRef.current?.offsetWidth ?? 0;
    const modalHeight = modalRef.current?.offsetHeight ?? 0;
    const { innerWidth, innerHeight } = window;

    if (position.left + modalWidth > innerWidth) {
      position.left = innerWidth - modalWidth - 10;
    }

    if (position.top + modalHeight > innerHeight) {
      position.top = innerHeight - modalHeight - 10;
    }

    setModalPosition(position);
  }, []);

  return {
    state: {
      modalRef,
      isOpenModal,
      modalPosition,
    },
    functions: {
      setIsOpenModal,
      setModalPosition,
      adjustModalPosition,
    },
  };
};

export { useCreateReminderModal };
