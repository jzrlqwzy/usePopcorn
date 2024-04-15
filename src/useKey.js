import { useEffect } from "react";

export function useKey(key, callbackAction) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callbackAction();
        }
      }

      document.addEventListener("keydown", callback);

      // cleanup function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, callbackAction]
  );
}
