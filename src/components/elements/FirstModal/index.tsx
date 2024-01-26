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
          <h3 className="font-bold text-lg">Welcome to Weather apps ⛅</h3>
          <p className="py-4">Forecast feature only supports on Desktop and Tablet platforms.</p>
          <div className="modal-action">
          <form method="dialog" className="flex justify-between items-center">
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