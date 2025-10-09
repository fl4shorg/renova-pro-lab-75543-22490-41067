import { useState, memo, lazy, Suspense } from 'react';
import { ChevronDown, Folder } from 'lucide-react';
import { ApiCategory } from '@/types/api';
import { Skeleton } from '@/components/ui/skeleton';
const ApiEndpoint = lazy(() => import('./ApiEndpoint').then(m => ({ default: m.ApiEndpoint })));

interface CategoryGroupProps {
  category: ApiCategory;
  serverUrl: string;
}

const CategoryGroupComponent = ({ category, serverUrl }: CategoryGroupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div 
      className="bg-card/50 border border-border/50 rounded-2xl shadow-card hover:shadow-elegant transition-smooth overflow-hidden backdrop-blur-sm content-visibility-auto"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 600px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/5 transition-smooth group"
      >
        <h2 className="font-black flex items-center gap-3 font-sans">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-smooth shadow-sm flex-shrink-0">
            <Folder className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm group-hover:text-primary transition-smooth tracking-tight">{category.name}</span>
          <span className="text-[10px] px-2 py-1 rounded-full bg-muted/80 text-muted-foreground font-bold font-mono uppercase tracking-wider flex-shrink-0">
            {category.endpoints.length} {category.endpoints.length === 1 ? 'endpoint' : 'endpoints'}
          </span>
        </h2>
        <ChevronDown 
          className={`w-6 h-6 transition-smooth text-muted-foreground group-hover:text-primary ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="content-visibility-auto" style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 500px' }}>
          {category.endpoints.map((endpoint) => (
            <div key={endpoint.id} className="content-visibility-auto" style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 220px' }}>
              <Suspense fallback={<div className="p-4"><Skeleton className="h-28 w-full rounded-xl" /></div>}>
                <ApiEndpoint 
                  endpoint={endpoint} 
                  serverUrl={serverUrl}
                />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const CategoryGroup = memo(CategoryGroupComponent);
