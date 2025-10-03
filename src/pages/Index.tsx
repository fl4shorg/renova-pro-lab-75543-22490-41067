import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { ServerSelector } from '@/components/ServerSelector';
import { StatsDisplay } from '@/components/StatsDisplay';
import { SearchBar } from '@/components/SearchBar';
import { CategoryGroup } from '@/components/CategoryGroup';
import { servers, apiCategories, getTotalEndpoints, getTotalCategories } from '@/data/mockApi';

const Index = () => {
  const [selectedServer, setSelectedServer] = useState(servers[0].url);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return apiCategories;

    return apiCategories
      .map(category => ({
        ...category,
        endpoints: category.endpoints.filter(endpoint =>
          endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
          endpoint.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
          endpoint.category.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(category => category.endpoints.length > 0);
  }, [searchQuery]);

  const hasResults = filteredCategories.length > 0;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-20">
        <Header />
        
        <ServerSelector
          servers={servers}
          selectedServer={selectedServer}
          onServerChange={setSelectedServer}
        />

        <StatsDisplay
          totalEndpoints={getTotalEndpoints()}
          totalCategories={getTotalCategories()}
        />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="space-y-4">
          {hasResults ? (
            filteredCategories.map(category => (
              <CategoryGroup
                key={category.name}
                category={category}
                serverUrl={selectedServer}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto glass-effect p-8 rounded-2xl">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">No endpoints found</h3>
                <p className="text-xs text-muted-foreground">Try adjusting your search query</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
