// From UserAuthContext.md Section - Add Imports //Replace imports
import { createContext } from "react";

// From UserAuthContext.md Section - Adding Code, do step 1 
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
// From UserAuthContext.md Section - Adding Code, do step 5 


// From UserAuthContext.md Section - Backend Methods, do step 1 
  

// From UserAuthContext.md Section - Backend Methods, do step 2 
  

// From UserAuthContext.md Section - Backend Methods, do step 3 
  

// From UserAuthContext.md Section - Backend Methods, do step 4 
  

// From UserAuthContext.md Section - Backend Methods, do step 5 


// From UserAuthContext.md Section - State of Authentication, do step 1 
 

// From UserAuthContext.md Section - Adding Code, do step 2 //Replace return();
// From UserAuthContext.md Section - State of Authentication, do step 2  //Replace return(); AGAIN, the is additional value={{}}
  return (
    <userAuthContext.Provider
      value = {{}}  
    >
      {children}
    </userAuthContext.Provider>
  );
}

// From UserAuthContext.md Section - Adding Code, do step 3 

