// import { Modal } from "antd"
// import React from "react"

// const ModalContext = React.createContext()

// export function useModal() {
//   return React.useContext(ModalContext)
// }

// export default function ModalProvider({ children }) {
//   const initModal = { component: null, options: {}, form: null }
//   const [modalData, setModalData] = React.useState(initModal)
//   const closeModal = () => {
//     setModalData(initModal)
//   }
//   return (
//     <ModalContext.Provider value={{ modalData, setModalData, closeModal }}>
//       <Modal visible={modalData.component} destroyOnClose={true} onCancel={() => setModalData(initModal)} {...modalData.options} footer={null}>
//         {modalData?.component}
//       </Modal>
//       {children}
//     </ModalContext.Provider>
//   )
// }
