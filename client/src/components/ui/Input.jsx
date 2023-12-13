import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full text-white px-4 py-2 rounded-md" style={{backgroundColor:"rgba(222, 111, 164, 0.8)" , border:"2px solid rgba(0, 0, 0, 1)"}}
  />
));
