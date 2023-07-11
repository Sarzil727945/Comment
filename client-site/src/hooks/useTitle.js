import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - Comment`;
     }, [title])
};

export default useTitle;