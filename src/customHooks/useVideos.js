import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        Search(defaultSearchTerm);
    }, [])
    const Search = async (term) => {
        const videoResponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setvideos(videoResponse.data.items, )
    }
    return [videos, Search]
}
export default useVideos;