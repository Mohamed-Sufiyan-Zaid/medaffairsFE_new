import React, { useState } from 'react';
import './output.css'

function Output() {
    const [hideHeader, setHideHeader] = useState(false);
    const [plsHeaderKeys, setPlsHeaderKeys] = useState<string[]>([]);
    const [plsHeaderData, setPlsHeaderData] = useState<Record<string, string>>({});
    const [responseData, setResponseData] = useState<Record<string, string>>({});
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const exportToDoc = () => {
        // Export functionality code here
    };

    return (
        <div>
            <div className="main-content">
                <div className='header-top-content'>
                    <div>Template Name:</div>
                    <div className="editable">
                        Template Name 1
                    </div>
                    <div>Sections:</div>
                    <div className="editable">
                        4
                    </div>
                    <div>Project Name:</div>
                    <div className="editable">
                    Reality OS Extended PPO
                    </div>
                </div>
                <h6>Reality OS Info Doc:</h6>
                <h5>Output:</h5>
                <div className="edit-button-container">
                    
                    <button className="edit-button" onClick={handleEditClick}>

                        {isEditing ? <div className='edit-save-button'>Save</div> : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.5 14H14" stroke="#46474B" stroke-width="0.711111" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.75 1.47176C11.0373 1.1697 11.427 1 11.8333 1C12.0345 1 12.2338 1.04166 12.4196 1.12261C12.6055 1.20355 12.7744 1.32219 12.9167 1.47176C13.0589 1.62133 13.1718 1.79889 13.2488 1.99431C13.3258 2.18972 13.3654 2.39917 13.3654 2.61069C13.3654 2.82221 13.3258 3.03166 13.2488 3.22707C13.1718 3.42249 13.0589 3.60005 12.9167 3.74962L3.88889 13.2407L1 14L1.72222 10.9628L10.75 1.47176Z" stroke="#46474B" stroke-width="0.711111" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>}
                    </button>
                </div>
                {hideHeader ? (
                    <>
                        {plsHeaderKeys.map((headerKey, index) => (
                            <div className="content header-content" key={index}>
                                <h2>{headerKey}</h2>
                                <p>{isEditing ? (
                                    <div
                                        className="editable"
                                        contentEditable={isEditing}
                                        dangerouslySetInnerHTML={{ __html: plsHeaderData[headerKey] || '' }}
                                    />
                                ) : plsHeaderData[headerKey]}</p>
                            </div>
                        ))}
                        {Object.keys(responseData).map((key, index) => (
                            <div className="content" key={index}>
                                <h2>{key}</h2>
                                <p>{isEditing ? (
                                    <div
                                        className="editable"
                                        contentEditable={isEditing}
                                        dangerouslySetInnerHTML={{ __html: responseData[key] || '' }}
                                    />
                                ) : responseData[key]}</p>
                            </div>
                        ))}
                    </>
                ) : null}
                {hideHeader ? (
                    <button className="export-btn" onClick={exportToDoc}>Export</button>
                ) : null}
            </div>
        </div>
    );
}

export default Output;
