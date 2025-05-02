import ScoreCard from './ScoreCard';

export async function generateStaticParams() {
    const matchIds = ['1001', '1002', '1003', '1004', '1005'];
    
    return matchIds.map(id => ({
      game_id: id,
    }));
  }
  
  export default async function MatchPage({ params }) {
    const resolvedParams = await params;
    
    const { game_id } = resolvedParams;
    const url = `https://www.t20mumbai.com/sifeeds/repo/cricket/live/json/${game_id}.json`;
  
    let json;
    try {
      const res = await fetch(url);
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      json = await res.json();
    } catch (err) {
      console.error('Failed to load match data:', err);
      return (
        <div className="section-width text-center py-8">
          <h2 className="text-lg font-semibold">Error loading match data</h2>
        </div>
      );
    }
  
    const match = json.match ?? json;
    return <ScoreCard match={match} />;
  }
  
