export default function Season(props) {
    const seasonElements = props.pageState.map(item => {
      return (
        <div key={item.season} className="showItem">
          <img className='seasonimage' src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>Episodes: {item.episodes.length}</p>
          <ul key={item.season} >
            {item.episodes.map(episode => (
              <li key={episode.id}>
                <p>Title: {episode.title}</p>
                <p>Episode: {episode.episode}</p>
                <audio src={episode.file} controls/>
              </li>
            ))}
          </ul>
        </div>
      );
    });
    return( <>{seasonElements}</>);
  }
    
    
    
    
    
    
    
    