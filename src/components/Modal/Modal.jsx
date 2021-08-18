import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { Container, Box } from "@material-ui/core"
import { Close } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';
import { GlobalState } from '../../context/GlobalState'
import {
  useBodyScrollLock,
  useCloseOnEsc
} from "@weahead/react-customizable-modal";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 959px) {
    padding: 0px .1rem;
  }
`


const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: fixed;
  color: black;
  top: 15px;
  right: 0px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  @media (max-width: 959px) {
    width: 24px;
    height: 24px;
    top: 10px;
    right: 35px;
  }
`;

const Modal = () => {
  const { modal: [showModal, setShowModal],modalContent: [modalContent] } = useContext(GlobalState)
  useBodyScrollLock();
  useCloseOnEsc(() => setShowModal(!showModal));

  const modalRef = useRef();

  const modalProps = useSpring({
    config: { mass: 1, tension: 280, friction: 25, duration: 200 },
    transform: "scale(1)",
    from: { transform: "scale(0)" },
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  return (
    showModal ? (
      <Background ref={modalRef} onClick={closeModal} >
        <animated.div style={modalProps}>
          <Container maxWidth="xs">
            <Box px={{ xs: 1, sm: 0 }}>
              <ModalWrapper showModal={showModal}>
                {modalContent}
                <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev => !prev)}></CloseModalButton>
              </ModalWrapper>
            </Box>
          </Container>
        </animated.div>
      </Background>
    ) : null
  )
}
export default Modal
