import React, { useState, useEffect } from "react";

const FirstModal =()=>{
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    );
  };
export default FirstModal