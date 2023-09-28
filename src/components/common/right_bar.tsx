import React, { useState } from 'react';
import Chat from './chat';
import './right_bar.css';

const Rightbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [showChat, setShowChat] = useState<boolean>(false);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
    setShowChat(false);
  };

  const handleRefineTextClick = () => {
    setShowChat(true);
  };

  return (
    <div className='rightnav'>
      <div className='tabs'>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
          Assistant
        </button>
        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          Lineage
        </button>
        
      </div>
      <div className='tab-content'>
        {showChat ? (
          <Chat /> // chat component if showChat is true
        ) : (
          <>
            {activeTab === 1 && (
              <div>
                <p>Prompt Used:</p>
                <p>Original Text:</p>
                <p>Present Text:</p>

                <div className='edit-send-button' onClick={handleRefineTextClick}>
                  Refine Text
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <p>Sources</p>
                <p>Document Name:</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Rightbar;
