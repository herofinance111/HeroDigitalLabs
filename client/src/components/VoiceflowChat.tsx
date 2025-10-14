import { useEffect } from "react";

export default function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];
    
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '68e36dca66acbe3e31c37cfc' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };
    
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}
