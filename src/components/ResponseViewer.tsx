import { useState } from 'react';

interface ResponseViewerProps {
  response: string;
  method?: string;
  url?: string;
  status?: number;
}

export const ResponseViewer = ({ response, method, url, status }: ResponseViewerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  let parsedResponse;
  try {
    parsedResponse = JSON.parse(response);
  } catch {
    parsedResponse = null;
  }

  // Check if response contains image URLs
  const findImageUrl = (obj: any): string | null => {
    if (!obj || typeof obj !== 'object') return null;
    
    // Check common image URL properties
    const imageKeys = ['url', 'image', 'imageUrl', 'img', 'picture', 'photo', 'src', 'link'];
    for (const key of imageKeys) {
      if (obj[key] && typeof obj[key] === 'string') {
        const value = obj[key];
        // Check if it's a valid image URL or data URI
        if (value.startsWith('http') || value.startsWith('data:image') || 
            value.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?|$)/i)) {
          return value;
        }
      }
    }
    
    // Search recursively
    for (const key in obj) {
      const result = findImageUrl(obj[key]);
      if (result) return result;
    }
    
    return null;
  };

  const imageUrl = parsedResponse ? findImageUrl(parsedResponse) : null;

  const RequestInfo = () => (
    <div className="mb-3 pb-3 border-b border-primary-foreground/20">
      {method && (
        <div className="text-xs font-mono mb-1">
          <span className="opacity-70">Method:</span> <span className="font-bold">{method}</span>
        </div>
      )}
      {url && (
        <div className="text-xs font-mono mb-1 break-all">
          <span className="opacity-70">URL:</span> <span className="font-bold">{url}</span>
        </div>
      )}
      {status && (
        <div className="text-xs font-mono">
          <span className="opacity-70">Status:</span> <span className="font-bold">{status}</span>
        </div>
      )}
    </div>
  );

  if (imageUrl) {
    return (
      <div className="bg-primary text-primary-foreground p-4">
        <div className="max-h-80 overflow-auto flex flex-col gap-4">
          <RequestInfo />
          <img 
            src={imageUrl} 
            alt="" 
            className="max-w-full h-auto rounded"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          <div className={imageLoaded ? "border-t border-primary-foreground/20 pt-3" : ""}>
            {imageLoaded && <div className="text-xs font-semibold mb-2 opacity-70">JSON Response:</div>}
            <pre className="text-xs font-mono whitespace-pre-wrap break-words">
              {response}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary text-primary-foreground p-4">
      <div className="max-h-80 overflow-auto">
        <RequestInfo />
        <pre className="text-xs font-mono whitespace-pre-wrap break-words">
          {response}
        </pre>
      </div>
    </div>
  );
};
