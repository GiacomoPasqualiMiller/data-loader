import React, { useState, useEffect } from "react";
import axios from "axios";
export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    //eseguiamo la chiamata che ci restituisce il current user
    (async () => {
      const response = await axios.get(resourceUrl);
      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state }); //va a identificare la proprietà con assenato lo state
        }
        return child;
      })}
    </>
  );
};
