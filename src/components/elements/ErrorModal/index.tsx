import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const ErrorModal =()=>{
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      if (!modal.open) {
        modal.showModal();
      }
      return () => {
        modal.close();
      };
    }, []);
    return (
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-4">Error</h3>
          <p className="text-center pt-5">Location not found !</p>
          <p className="text-center">Please try again</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn rounded-3xl font-bold" onClick={() => setIsOpen(false)}>
                <IoMdClose />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };
export default ErrorModal