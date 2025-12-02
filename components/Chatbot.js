import { useMemo, useEffect } from "react";

export default function Chatbot() {
  const apiKey = process.env.NEXT_PUBLIC_BSC_CHAT_API_KEY || "REPLACE_WITH_REAL_KEY";

  const configs = useMemo(
    () =>
      JSON.stringify({
        maximized: false,
        isMarkdown: false,
        image: "/favicon.png",
        welcomeMessages: [
          "Welcome to the Virtual Assistant. My name is RocketBot. How can I help you?"
        ],
        placeholder: "Write your message here",
        title: "RocketTeam – Virtual Assistant",
      }),
    []
  );

useEffect(() => {
    const interval = setInterval(() => {
      const chat = document.querySelector("bsc-chat");
      if (!chat) return;

      const root = chat.shadowRoot;
      if (!root) return;

      const container = root.querySelector("#bsc-chat-container");
      if (!container) return;

      if (root.querySelector("#custom-size-style")) {
        clearInterval(interval);
        return;
      }

      const style = document.createElement("style");
      style.textContent = `
        #bsc-chat-container {
          height: 70vh; 
          max-height: 70vh;
          border-radius: 16px !important;
          border-left: none !important;
          bottom: 10px;
          right: 10px;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }
        #bsc-chat-container .bsc-header {
          background: linear-gradient(166deg,rgba(97, 95, 255, 0.5) 0%, rgba(152, 16, 250, 1) 100%);
          border-radius: 20px 20px 0 0;
          backdrop-filter: blur(10px);
        }
        #bsc-chat-container .bsc-header-details-text-title{
          color: white !important;
        }
        .bsc-chat-container-minimized{
          bottom: 0px !important;
          right: 0px !important;
        }
        #bsc-chat-container .bsc-header-action-minimize-icon{
          background-color: white !important;
        }
        #bsc-chat-container .bsc-header-action-close-icon{
          background-color: white !important;
        }
        #bsc-chat-container .bsc-message-list .bsc-message-list-container .bsc-local .bsc-message{
          background: linear-gradient(166deg, rgb(152 16 250 / 72%) 0%, rgba(152, 16, 250, 1) 100%);
        }
        #bsc-chat-container .bsc-footer{
          border-radius: 0 0 20px 20px;
        }
        #bsc-chat-container .bsc-footer #bsc-footer-actions #bsc-send-button{
          background-color:  #9810fab8 !important;
        }
      `;

      style.id = "custom-size-style";
      root.appendChild(style);

      clearInterval(interval);
    }, 300);
  }, []);

  return (
    <div className="fixed bottom-2.5 right-2.5 z-[9999999]">
      <bsc-chat
        id="chatbot"
        apikey={apiKey}
        theme="https://webchat-themes.ng.botschool.ai/private-themes/botschool/theme.json"
        type="llm"
        configs={configs}
      ></bsc-chat>
    </div>
  );
}
