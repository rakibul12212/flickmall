import React from "react";
// Define the cn function
function cn(...classNames) {
    return classNames.filter(Boolean).join(' ');
  }
const Container= ({ children, className })=> {
    return React.createElement('div', { className: cn("w-full max-w-[1420px] px-[40px] mx-auto", className) }, children);
}
  
  export default Container;
  