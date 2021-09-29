
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "";
    }
  },[isOpen]);

  useEffect(() => {
    mount.appendChild(el);

    return () => mount.removeChild(el);
  }, [el, mount]);

  return isOpen && createPortal(children, el);
};

export default Modal;
