import { useEffect } from "react";
import scrollReveal from "scrollreveal";


function useAnim(sectionRef:React.RefObject<HTMLElement>, origin: string = 'right'){
    useEffect(() => {
        if (sectionRef.current)
          scrollReveal().reveal(sectionRef.current, {
            origin: origin,
            distance: '50px',
            reset: false,
            delay: 250
          });
      }, [sectionRef, origin]);
}

export default useAnim