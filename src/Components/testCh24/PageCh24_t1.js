import React, { useState } from "react";
import ModalDialog from "./ModalDialog";
import { Transition ,CSSTransition } from "react-transition-group";
import './PageCh24_t1.css';
const PageCh24_t1 = () => {
  const [showbox, setShowbox] = useState(false);
  const [modelDialog, setModelDialog] = useState({
    show: false,
    title: "heloo",
    message: "do you have  good like ?",
  });
  const showboxHandler = () => {
    setShowbox((prev) => !prev);
  };

  const CloseHandler = () => {
    setModelDialog((prev) => {
      return { ...prev, show: false };
    });
  };
  const toggleModalDialoagHandler = () => {
    setModelDialog((prev) => {
      return { ...prev, show: !prev.show };
    }); //, prev.show :!prev.show
  };

  return (
    <div>
      <hr />
      <h2 className="m-2">PageCh24 list book </h2>

      <button className="btn btn-info  m-2" onClick={showboxHandler}>
        show box
      </button>
      <div
        style={{
          height: showbox ? 80 : 0,
          width: 90,
          margin: "auto",
          backgroundColor: "red",
          transition: "all 1s ease-out ",
          opacity: showbox ? 1 : 0,
        }}
      >
        {" "}
        tt1{" "}
      </div>
      <Transition in={showbox} timeout={1000}>
        {(state) => <div style={{border:'1px solid red',padding:20,}}> state : {state} </div>}
      </Transition>
      timeout events
      <Transition
        in={showbox}
        timeout={{ enter: 1000, exit: 800 }}
        mountOnEnter
        unmountOnExit
        onEnter={() => {
          console.log("event 1 onEnter");
        }}
        onEntering={() => {
          console.log("event 2 onEntering");
        }}
        onEntered={() => {
          console.log("event 3 onEntered");
        }}
        onExit={() => {
          console.log("event 1 onExit");
        }}
        onExiting={() => {
          console.log("event 2 onExiting");
        }}
        onExited={() => {
          console.log("event 3 onExited");
        }}
      >
        {(state) => (
          <div
            style={{
              height: 80, // but test unmountOnExit >>>ok state==='entering'?80: (state==='exited' || state==='exiting')  ?0:80 ,   //entered:80   (state==='exited' || state==='exiting')
              width: 90,
              margin: "auto",
              backgroundColor: "red",
              transition: "all 1s ease-out ",
              opacity:
                state === "entering"
                  ? 1
                  : state === "exited" || state === "exiting"
                  ? 0
                  : 1, //entered:1
            }}
          >
             tt2 
          </div>
        )}
      </Transition>
      CSSTransition
      <CSSTransition
        in={showbox}
        timeout={{ enter: 1000, exit: 800 }}
        mountOnEnter
        unmountOnExit
         classNames="fade-slide"
      >
        {(state) => (
          <div  >
             tt3 
          </div>
        )}
      </CSSTransition>
     custom    CSSTransition 
      <CSSTransition
        in={showbox}
        timeout={{ enter: 1000, exit: 800 }}
        mountOnEnter
        unmountOnExit
         classNames={{
          appear:'',
          enter:'boxItem-show-enter',
          enterActive:'boxItem-show',
          enterDone :'boxItem',
          exit:'',
          exitActive:'boxItem-hide',
          exitDone :''
         }} >
        {(state) => (
          <div  >
             tt4 
          </div>
        )}
      </CSSTransition>

      <button className="btn btn-info  m-2" onClick={toggleModalDialoagHandler}>
        toggle Modal Dialoag
      </button>
      <ModalDialog
        show={modelDialog.show}
        title={modelDialog.title}
        message={modelDialog.message}
        onClose={CloseHandler}
      />
    </div>
  );
};
export default PageCh24_t1;
