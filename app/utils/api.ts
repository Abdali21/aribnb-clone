export const getExplore = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/SGDG`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const exploreData = await res.json();
      if (!Array.isArray(exploreData)) {
        throw new Error('Expected an array but received something else');
      }
      return exploreData;
    } catch (error) {
      console.error('Error fetching explore data:', error);
      return []; 
    }
  };
  
  export const getLive = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/BKK6`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const liveData = await res.json();
      if (!Array.isArray(liveData)) {
        throw new Error('Expected an array but received something else');
      }
      return liveData;
    } catch (error) {
      console.error('Error fetching live data:', error);
      return [];
    }
  };
  
  export const getSearchResult = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const searchResultData = await res.json();
      if (!Array.isArray(searchResultData)) {
        throw new Error('Expected an array but received something else');
      }
      return searchResultData;
    } catch (error) {
      console.error('Error fetching search result data:', error);
      return [];
    }
  };
  