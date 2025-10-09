import { Server } from '@/types/api';

interface ServerSelectorProps {
  servers: Server[];
  selectedServer: string;
  onServerChange: (url: string) => void;
}

export const ServerSelector = ({ servers, selectedServer, onServerChange }: ServerSelectorProps) => {
  return (
    <div className="mb-6">
      <label className="block text-xs font-semibold text-muted-foreground mb-3 font-sans uppercase tracking-wider">
        Selecionar Servidor
      </label>
      <div className="relative group">
        <div className="absolute inset-0 gradient-primary opacity-0 group-focus-within:opacity-5 rounded-xl blur-xl transition-smooth"></div>
        <select
          value={selectedServer}
          onChange={(e) => onServerChange(e.target.value)}
          className="relative w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-primary focus:shadow-elegant bg-card text-foreground appearance-none font-mono transition-smooth shadow-card cursor-pointer hover:shadow-md"
        >
          {servers.map((server) => (
            <option key={server.url} value={server.url}>
              {server.url} - {server.name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
