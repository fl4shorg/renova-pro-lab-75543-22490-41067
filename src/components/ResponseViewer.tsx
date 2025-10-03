interface ResponseViewerProps {
  response: string;
  method?: string;
  url?: string;
  status?: number;
}

export const ResponseViewer = ({ response, method, url, status }: ResponseViewerProps) => {
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
    const imageKeys = ['url', 'image', 'imageUrl', 'img', 'picture', 'photo', 'src'];
    for (const key of imageKeys) {
      if (obj[key] && typeof obj[key] === 'string' && 
          (obj[key].startsWith('http') || obj[key].startsWith('data:image'))) {
        return obj[key];
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
            alt="API Response" 
            className="max-w-full h-auto rounded"
          />
          <details className="cursor-pointer">
            <summary className="text-xs font-semibold">View JSON Response</summary>
            <pre className="text-xs font-mono whitespace-pre-wrap break-words mt-2">
              {response}
            </pre>
          </details>
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
