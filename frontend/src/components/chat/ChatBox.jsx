function ChatBox({ messages }) {

  return (

    <div className="mt-8 h-[500px] overflow-y-auto rounded-3xl bg-white p-6 shadow-lg">

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`mb-5 flex ${
            msg.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-[75%] rounded-2xl px-5 py-4 ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >

            {msg.text}

          </div>

        </div>

      ))}

    </div>

  );

}

export default ChatBox;