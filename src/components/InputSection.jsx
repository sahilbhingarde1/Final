import React, { useState } from 'react';

const InputSection = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-4 bg-gray-700 rounded-lg text-white"
        placeholder="Describe the face you want to generate..."
        rows={4}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        Generate Image
      </button>
    </form>
  );
};

export default InputSection;
