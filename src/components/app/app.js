import React, { useState, useEffect } from 'react';
import youtube from '../../apis/youtube'
import VideoSearchBar from "../searchBar/search";
import VideoList from '../videos/videoList';
import VideoPlayer from '../videos/videoPlayer';

import './app.css';
import { nullLiteral } from '@babel/types';

const App = () => {
    const key = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';
    const [videos, setvideos] = useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);

    useEffect(() => {
        searchSubmit('flight');
    }, [])
    const searchSubmit = async (term) => {
        const videoResponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setvideos(videoResponse.data.items, )
        setselectedVideo(videoResponse.data.items[0])
    }
    const onSelectVideo = (video) => {
        setselectedVideo(video)
    }

    return (
        <div className="ui container">
            <h1>Am App component..!</h1>
            <VideoSearchBar whenSearchSubmit={searchSubmit} />
            <div className="contentArea">
                <div className="videoPlayer">
                    <VideoPlayer currentVideo={selectedVideo} />
                </div>
                <div className="videosList">
                    <VideoList videos={videos} onSelectVideo={setselectedVideo} />
                </div>
            </div>

        </div>
    )
}

export default App;