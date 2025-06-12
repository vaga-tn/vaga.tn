"use client";

import { useEffect } from "react";

export default function TawkScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6848527d77026219101b65aa/1itd84eda";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}