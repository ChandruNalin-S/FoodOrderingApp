import { createContext } from "react";

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const UserContext = createContext({// to create context react provide a hook called creatContext.
  loggedUser:"Default User"
});

export default UserContext;