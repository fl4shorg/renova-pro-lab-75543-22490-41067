import { useState } from 'react';
import { ChevronDown, Play, Code } from 'lucide-react';
import { ApiEndpoint as ApiEndpointType } from '@/types/api';
import { EndpointForm } from './EndpointForm';
import { ResponseViewer } from './ResponseViewer';
import { supabase } from '@/integrations/supabase/client';
import { useApiHealth } from '@/hooks/useApiHealth';

interface ApiEndpointProps {
  endpoint: ApiEndpointType;
  serverUrl: string;
}

export const ApiEndpoint = ({ endpoint, serverUrl }: ApiEndpointProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [requestInfo, setRequestInfo] = useState<{method: string; url: string; status: number; contentType?: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const healthStatus = useApiHealth(serverUrl, endpoint.path);

  const handleSubmit = async (formData: Record<string, string>) => {
    setIsLoading(true);
    try {
      // Use Cloud proxies to avoid CORS for specific endpoints
      if (endpoint.id === 'noticias') {
        const { data, error } = await supabase.functions.invoke('proxy-noticias', {
          body: { params: formData },
        });
        if (error) throw error;
        setResponse(JSON.stringify(data, null, 2));
        setRequestInfo({
          method: endpoint.method,
          url: `${serverUrl}${endpoint.path}`,
          status: 200
        });
        return;
      }
      if (endpoint.id === 'hentai') {
        const { data, error } = await supabase.functions.invoke('proxy-hentai', {
          body: { params: formData },
        });
        if (error) throw error;
        setResponse(JSON.stringify(data, null, 2));
        setRequestInfo({
          method: endpoint.method,
          url: `${serverUrl}${endpoint.path}`,
          status: 200
        });
        return;
      }

      // Default: direct request
      const params = new URLSearchParams(formData);
      const url = `${serverUrl}${endpoint.path}?${params.toString()}`;
      const res = await fetch(url);
      
      const contentType = res.headers.get('content-type') || '';
      
      // Handle different content types
      if (contentType.includes('video/')) {
        // Direct video stream - create blob URL for player
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        setResponse(blobUrl);
        setRequestInfo({
          method: endpoint.method,
          url: url,
          status: res.status,
          contentType: 'video'
        });
      } else if (contentType.includes('image/')) {
        // Direct image - create blob URL for display
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        setResponse(blobUrl);
        setRequestInfo({
          method: endpoint.method,
          url: url,
          status: res.status,
          contentType: 'image'
        });
      } else {
        // JSON or text response
        try {
          const data = await res.json();
          setResponse(JSON.stringify(data, null, 2));
          setRequestInfo({
            method: endpoint.method,
            url: url,
            status: res.status,
            contentType: 'json'
          });
        } catch {
          // If JSON parsing fails, treat as text
          const text = await res.text();
          setResponse(text);
          setRequestInfo({
            method: endpoint.method,
            url: url,
            status: res.status,
            contentType: 'text'
          });
        }
      }
    } catch (error) {
      setResponse(JSON.stringify({ error: 'Request failed', message: String(error) }, null, 2));
      setRequestInfo({
        method: endpoint.method,
        url: `${serverUrl}${endpoint.path}`,
        status: 500
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setResponse(null);
    setRequestInfo(null);
  };

  const getStatusClass = () => {
    if (healthStatus === 'online') return 'status-online';
    if (healthStatus === 'offline') return 'status-offline';
    return 'status-checking';
  };

  const getStatusText = () => {
    if (healthStatus === 'online') return 'Operational';
    if (healthStatus === 'offline') return 'Offline';
    return 'Checking...';
  };

  return (
    <div className="border-t border-border/50 backdrop-blur-sm hover:bg-accent/5 transition-smooth">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-3 text-left flex items-center justify-between group"
      >
        <div className="flex items-center min-w-0 flex-1 gap-3">
          <div className="relative">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold text-white bg-gradient-to-r from-primary to-primary-glow rounded-lg font-sans shadow-elegant group-hover:scale-105 transition-smooth uppercase tracking-wider">
              {endpoint.method}
            </span>
            <div 
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full status-online animate-pulse transition-smooth border border-background"
              title="Operational"
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-semibold truncate text-sm font-mono group-hover:text-primary transition-smooth" title={endpoint.path}>
              {endpoint.path}
            </span>
            <span className="text-xs text-muted-foreground truncate font-sans" title={endpoint.alias}>
              {endpoint.alias}
            </span>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-smooth text-muted-foreground group-hover:text-primary flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="bg-muted/20 px-6 py-5 border-t border-border/50 backdrop-blur-sm animate-fade-in">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <Play className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-sm font-sans uppercase tracking-wider">
                Try It Out
              </h3>
            </div>
            <EndpointForm
              endpoint={endpoint}
              onSubmit={handleSubmit}
              onClear={handleClear}
              isLoading={isLoading}
              hasResponse={!!response}
            />
          </div>

          {response && (
            <div className="animate-scale-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-foreground font-bold text-sm font-sans uppercase tracking-wider">
                  Response
                </h3>
              </div>
              <ResponseViewer 
                response={response} 
                method={requestInfo?.method}
                url={requestInfo?.url}
                status={requestInfo?.status}
                contentType={requestInfo?.contentType}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
