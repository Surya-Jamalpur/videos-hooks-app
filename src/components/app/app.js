import React, { useState, useEffect } from 'react';
import VideoSearchBar from "../searchBar/search";
import VideoList from '../videos/videoList';
import VideoPlayer from '../videos/videoPlayer';

import './app.css';
import { nullLiteral } from '@babel/types';
import useVideos from '../../customHooks/useVideos';

const App = () => {
    const key = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';
    const [selectedVideo, setselectedVideo] = useState(null);
    const [videos, Search] = useVideos('ratan');
    useEffect(() => {
        setselectedVideo(videos[0])
    }, [videos])



    // const onSelectVideo = (video) => {
    //     setselectedVideo(video)
    // }

    return (
        <div className="ui container">
            <h1>Am App component..!</h1>
            <VideoSearchBar whenSearchSubmit={Search} />
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