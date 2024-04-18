import React,{useState} from "react";



const CRMcontext = React.createContext([{}, () => {}]);

const CRMprovider = props => {
  const [auth, guardarToken] = useState({
    token: "",
    autenticado: false,
   
  });

  return (
    <CRMcontext.Provider value={[auth, guardarToken]}>
      {props.children}
    </CRMcontext.Provider>
  );
}

export {CRMcontext, CRMprovider};