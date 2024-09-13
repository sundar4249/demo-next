import React, { ReactNode } from "react";

function CustomSpinner({
  spinning,
  children,
}) {

    if(spinning){
        
        return (
          <div>
          Loading....
        </div>
        );
    }else{
        return <>{children}</>
    }
}

export default CustomSpinner;