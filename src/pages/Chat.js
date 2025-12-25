import { useState } from "react";
import userPhrases from "../data/userPhrases.json";
import { getBotReply } from "../logic/chatLogic";

function Chat({ cat }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Мяу…" }
  ]);

  const [hiddenState, setHiddenState] = useState({
    affection: 35,
    mood: "neutral"
  });

  const [typing, setTyping] = useState(false);

  function send(phrase) {
    setMessages((m) => [...m, { from: "me", text: phrase.text }]);
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(hiddenState, phrase.intent);

      setMessages((m) => [...m, { from: "bot", text: reply.text }]);
      setHiddenState(reply.hiddenState);
      setTyping(false);
    }, 700);
  }

  return (
    <div>
      <h2>Чат з {cat.name}</h2>

      <div className="chat-box">
        {messages.map((m, i) => (
          <p key={i} className={m.from === "me" ? "me" : "cat"}>
            {m.text}
          </p>
        ))}
        {typing && <p className="cat">Кіт друкує…</p>}
      </div>

      <div className="chat-actions">
        {userPhrases.map((p) => (
          <button key={p.id} onClick={() => send(p)}>
            {p.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Chat;

