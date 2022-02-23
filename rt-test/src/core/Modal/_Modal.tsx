import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import useGlobalTableState from "@/hooks/useGlobalTableState";
import Button from "@/core/Button/_Button";
import useGlobalModalState from "@/hooks/useGlobalModalState";

interface IModal {
  children?: React.ReactNode;
}

export default function ModalPortal({ children }: IModal) {
  return ReactDOM.createPortal(FormContent({ children }), document.body);
}

function FormContent({ children }: IModal) {
  const { isOpen, setOpen } = useGlobalModalState();
  const { tableState, dispatch } = useGlobalTableState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("what is data", data);
  };

  const handleClose = () => setOpen(false);
  console.log("what is open", isOpen);
  if (!isOpen) return null;
  return (
    <div
      id="hello world"
      className="absolute bottom-0 left-0 h-full w-full bg-white"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        <input type="submit">
          <Button title="Submit" />
        </input>
      </form>
    </div>
  );
}
