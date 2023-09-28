import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.jpg';

//import './chat.css'

/*const TypingSVG = () => {
    return (
        <svg height={40} width={40} style={{ marginLeft: 20 }} className="loader">
            <circle className="dot" cx={10} cy={20} r={3} style={{ fill: "grey" }} />
            <circle className="dot" cx={20} cy={20} r={3} style={{ fill: "grey" }} />
            <circle className="dot" cx={30} cy={20} r={3} style={{ fill: "grey" }} />
        </svg>
    );
};*/

function Chat() {
  const [showTyping, setShowTyping] = useState(false);
  const [chats, setChats] = useState<
    {
      by: string;
      content: string;
      metadata?: { [key: string]: string }[];
    }[]
  >([
    {
      by: 'bot',
      content:
        'Hi there. What information would you like to explore today?',
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  let [length, setLength] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [validationError, setValidationError] = useState(false);
  let text = '';

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setValidationError(false);
      text = event.currentTarget.value;
      if (event.key === 'Enter') {
        displayText(event.currentTarget.value);
        event.currentTarget.value = '';
      }
    } else {
      if (event.key === 'Enter') {
        setValidationError(true);
      }
    }
  };

  const delay = (delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  const submit = async () => {
    text = (document.getElementById('text') as HTMLInputElement).value;
    if (text) {
      displayText(text);
      text = '';
      (document.getElementById('text') as HTMLInputElement).value = '';
    } else {
      setValidationError(true);
    }
  };

  async function displayText(text: string) {
    let source: { [key: string]: string }[] = [];
    setChats((chats) => [...chats, { by: 'user', content: text }]);
    setShowTyping(true);
    let response = '';
    await fetch(`http://127.0.0.1:8000/ask?query=${text}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data...', data);
        response = data;
      });
    setShowTyping(false);
    /* if (response.metadata.length) {
             source = response.metadata;
         }*/
    setChats((chats) => [
      ...chats,
      /* { by: "bot", content: response.response, metadata: source },*/
    ]);
    setLength(length + 1);
  }

  const [clickedChatIndex, setClickedChatIndex] = useState<number | null>(null);

  const handleChatClick = (index: number) => {
    setClickedChatIndex(index === clickedChatIndex ? null : index);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <div className='rightnav'>
      <div className='divBlock ff'>
        <div className='chatBlock'>
          <div className='content'>
            <div id='output' className='output'>
              {chats.map((chat, index) => (
                <div key={index}>
                  <p
                    className={`${chat.by} ${isDropdownOpen ? 'hovered' : ''}`}
                    onClick={() => handleChatClick(index)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {chat.content}
                    {chat.metadata && isDropdownOpen && clickedChatIndex !== index && (
                      <span className='dropdown-icon'>&#9660;</span>
                    )}
                    {chat.metadata && isDropdownOpen && clickedChatIndex === index && (
                      <span className='dropdown-icon'>&#9650;</span>
                    )}
                  </p>
                  {chat.metadata && clickedChatIndex === index && (
                    <div className='sourceView'>
                      {chat.metadata &&
                        chat.metadata.map((item, idx) => (
                          <p key={idx}>
                            <span className='sourceViewReference'>
                              Reference {Object.keys(item)[0]}:
                            </span>{' '}
                            {Object.values(item)[0]}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div ref={bottomRef} />
          </div>
          {/*{showTyping && <TypingSVG />}*/}

          {/*<div className="text-field" onClick={handleKeyPress}>*/}
          <div className='text-field'>
            <input
              type='text'
              id='text'
              className={validationError ? 'errorText' : 'text'}
              placeholder='Enter your query'
              onKeyDown={handleKeyPress}
            />
            <button onClick={submit} className='arrowButton'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
              >
                <path
                  d='M13.517 7.78232C13.6622 7.70957 13.7842 7.59787 13.8695 7.45972C13.9548 7.32156 14 7.1624 14 7.00004C14 6.83767 13.9548 6.67851 13.8695 6.54036C13.7842 6.4022 13.6622 6.2905 13.517 6.21775L1.26652 0.0924925C1.11462 0.0164901 0.943888 -0.013663 0.775147 0.00571153C0.606407 0.025086 0.446953 0.0931506 0.316236 0.201602C0.185518 0.310054 0.0891905 0.454204 0.0390005 0.616468C-0.0111885 0.778733 -0.0130692 0.952096 0.0335884 1.11541L1.28402 5.4906C1.33632 5.67346 1.44678 5.8343 1.59867 5.94877C1.75056 6.06324 1.93561 6.12511 2.1258 6.125L6.1256 6.125C6.35767 6.125 6.58024 6.21719 6.74434 6.38129C6.90844 6.54539 7.00063 6.76796 7.00063 7.00004C7.00063 7.23211 6.90844 7.45468 6.74434 7.61878C6.58024 7.78288 6.35767 7.87507 6.1256 7.87507L2.1258 7.87507C1.93561 7.87497 1.75056 7.93683 1.59867 8.0513C1.44678 8.16577 1.33632 8.32661 1.28402 8.50948L0.0344624 12.8847C-0.0122877 13.0479 -0.0105196 13.2213 0.0395511 13.3835C0.0896219 13.5458 0.185831 13.69 0.316447 13.7986C0.447062 13.9071 0.606437 13.9753 0.775136 13.9948C0.943837 14.0143 1.11457 13.9843 1.26652 13.9085L13.517 7.7832L13.517 7.78232Z'
                  fill='#8E8E9E'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
