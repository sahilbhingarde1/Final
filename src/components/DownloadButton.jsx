import React from 'react';

const DownloadButton = ({ imageUrl }) => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-face.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="block mx-auto px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
    >
      Download Image
    </button>
  );
};

export default DownloadButton;
