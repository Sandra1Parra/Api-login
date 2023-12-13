import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref, rows = 2) => (
  <textarea
    {...props}
    ref={ref}
    className="w-full text-white px-4 py-2 rounded-md" style={{backgroundColor:"rgba(255, 83, 165, 0.8)"}}
    rows={rows}
  />
));
