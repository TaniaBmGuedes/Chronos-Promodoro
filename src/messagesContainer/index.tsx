import { Bounce, ToastContainer } from 'react-toastify';

type MesaageContainerProps = {
  children: React.ReactNode;
};
export function MessageContainer({children}: MesaageContainerProps) {
  return (
    <>
      {children}
      <ToastContainer
        position='bottom-right'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
