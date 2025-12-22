import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchAndDownload = async () => {
    if (!url) {
      setStatus('Please enter a URL.');
      return;
    }

    setIsLoading(true);
    setStatus(`Fetching content from ${url}...`);

    try {
      // Use a CORS proxy for cross-origin requests
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await fetch(proxyUrl + url);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;

      // Extract filename from URL or default to 'download'
      const filename = url.substring(url.lastIndexOf('/') + 1) || 'download';
      a.download = filename;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

      setStatus(`Successfully downloaded content from ${url}.`);
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus(`Failed to fetch content. ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-cyan-400">
          Web Content Ingestion Agent
        </h1>
        <p className="text-center text-gray-400">
          Enter a URL to fetch its content directly in your browser and download it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-grow p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            disabled={isLoading}
          />
          <button
            onClick={handleFetchAndDownload}
            disabled={isLoading}
            className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? 'Fetching...' : 'Fetch & Download'}
          </button>
        </div>

        {status && (
          <p className="text-center text-gray-300 pt-4">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
