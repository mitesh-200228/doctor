import React from 'react';

function TranslateButton() {
    const translate = () => {
        if (window.googleTranslateElementInit) {
            window.googleTranslateElementInit(); // Calls the Google Translate initialization function
        }
    };

    return (
        <button onClick={translate}>Translate</button>
    );
}

export default TranslateButton;
