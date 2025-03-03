import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AdminPage from './components/AdminPage';
import InputSection from './components/InputSection';
import ImageDisplaySection from './components/ImageDisplaySection';
import DownloadButton from './components/DownloadButton';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [showGenerator, setShowGenerator] = useState(false);

  const handleGenerate = async (inputPrompt) => {
    setPrompt(inputPrompt);
    // TODO: Add your image generation logic here
    // For now, we'll just simulate an image URL
    setGeneratedImage('placeholder-image-url');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Face Generator AI</h1>
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {isAdmin ? 'User Mode' : 'Admin Mode'}
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isAdmin ? (
          <AdminPage />
        ) : (
          <>
            {!showGenerator ? (
              <LandingPage onGetStarted={() => setShowGenerator(true)} />
            ) : (
              <div className="space-y-8">
                <InputSection onGenerate={handleGenerate} />
                {generatedImage && (
                  <>
                    <ImageDisplaySection imageUrl={generatedImage} prompt={prompt} />
                    <DownloadButton imageUrl={generatedImage} />
                  </>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
