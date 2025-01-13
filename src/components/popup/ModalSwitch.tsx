import React from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ModalType } from "@/constants/ModalConstant";

import { closeModal } from "@/redux/slices/modalSlice";
import Drawer from "react-modern-drawer";

type ModalComponent = React.FC<{ onClose?: () => void }>;

const ShareAppModal: ModalComponent = ({ onClose }) => {
  return <div>Share App Content</div>;
};

const modalComponents = {
  [ModalType.SHARE_APP]: ShareAppModal,
};

const ModalSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector((state: RootState) => state.modal);

  const toggleDrawer = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !type) return null;

  const SelectedModal = modalComponents[type];

  return (
    <>
      <div className="sm:hidden">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="bottom">
          {SelectedModal && <SelectedModal />}
        </Drawer>
      </div>
      <div className="">{SelectedModal && <SelectedModal />}</div>
    </>
  );
};

export default ModalSwitch;
