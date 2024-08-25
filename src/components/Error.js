import { useRouteError } from "react-router-dom";


const Error = ()=>{
  const error = useRouteError();
  console.log(error);// this will return as object in console.
  return(
    <div>
      <h3>Oops! {error.data}</h3>
      <h4>{error.status}: {error.statusText}</h4>
    </div>
  )
}

export default Error;