import {useState, useEffect} from'react'
// import axios from 'axios'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AppleIcon from '@mui/icons-material/Apple';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const axios = require("axios");


const Music = (props) => {
    const [videos, setVideos] = useState([])
    const [showVideos, setShowVideos] = useState(true)
    const { loading = false } = props;

    const channel_ID='UCLtYoxvuULI2mnng4q32-mA'
    const youTubeAPI = process.env.REACT_APP_YOUTUBE_API_KEY
    const youTubeLink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_ID}&key=${youTubeAPI}`

    const musicLinks = () => {
        return (
            <>
            <h1>Merch Page</h1>
            <h4>Big Mood-HearNow Link Below</h4>
            <br/>
            <a href='https://bigmood.hearnow.com/late-nights'>Click here for HearNow</a>
            <ul>Get the Music
                <li><RssFeedIcon />Spotify</li>
                <br/>
                <li><AppleIcon />Apple Music</li>
                <br/>
                <li><LibraryMusicIcon />Itunes</li>
                <br/>
                <li>Amazon</li>
                <br/>
                <li>YouTube</li>
                <br/>
                <li><EqualizerIcon />Deezer</li>
            </ul>
            </>
        )
    }
    const getVideos = () => {
        axios
            .get(youTubeLink)
            .then(res => setVideos(res.data.items),
            (err)=> console.error(err)
            )
            .catch((error)=> console.error(error))
    }
    const DisplayAll = () => {
        return (
            <>
        <div className='musicContainer'>
            {videos.map((item) => {
            return(
                // <Grid 
                // container wrap="nowrap"
                // className='smallMusicContainer'
                // >
                <div className='videosContainer'>
                    <Box  sx={{ width: 310, marginRight: 0.5, my: 5 }}>
                    {item ? (
                        <img
                        style={{ width: 310, height: 218 }}
                        alt={item.snippet.thumbnails.default.url}
                        src={item.snippet.thumbnails.high.url}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={310} height={218} />
                    )}

                    {item ? (
                        <Box sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {item.snippet.title}
                        </Typography>
                        <Typography display="block" variant="caption" color="black">
                            {item.snippet.channelTitle}
                        </Typography>
                        <Typography variant="caption" color="rgb(201, 66, 93)">
                            {`${item.snippet.description} `}
                            {/* <Button onClick={videoLink} type="button" variant="outlined">click here</Button> */}
                            <Button href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank"  type="button" className="btn btn-primary">Click Here</Button>

                        </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                        </Box>
                    )}
                    </Box>
                    </div>
                // </Grid>

        
            )
            })}
        </div>
        </>
        )
    }
    console.log(videos)

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <>
        <div id='musicBackground' 
            style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23272727' fill-opacity='0.54'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            background: '#757575'
            }}>
        {showVideos ? <DisplayAll/> : null}    
        </div>
        </>
    )
}

export default Music




