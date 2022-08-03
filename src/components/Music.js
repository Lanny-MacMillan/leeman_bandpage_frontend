import {useState, useEffect} from'react'
import axios from 'axios'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { FaSpotify } from 'react-icons/fa';
import { GiAudioCassette } from "react-icons/gi";
import { SiItunes } from "react-icons/si";
import { FaYoutube } from 'react-icons/fa';


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
                <br/>
                <li>Amazon</li>
                <br/>
                <li>YouTube</li>
                <br/>
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
            <h1 class='header'>Links to our Music</h1>
            <div id='iconContainerMusic'>
                <a href="https://www.youtube.com/channel/UCLtYoxvuULI2mnng4q32-mA/featured" target="_blank">
                    <FaYoutube size='2em' id='FaYoutube'/>
                    <span>YouTube</span>
                </a>
                <a href="https://open.spotify.com/album/0T4LqIiac0s7lobcy4kCLL" target="_blank">
                    <FaSpotify size='2em' id='FaSpotify'/>
                    <span>Spotify</span>
                </a>
                <a href="https://music.apple.com/us/album/late-nights-single/1442416001?at=1000lM6c&uo=4&app=apple" target="_blank">
                    <SiItunes size='2em' id='SiItunes'/>
                    <span>iTunes</span>
                </a>
                <a href="https://bigmood.hearnow.com/" target="_blank">
                    <GiAudioCassette size='2em' id='GiAudioCassette'/>
                    <span>HearNow</span>
                </a>
            </div>
            <hr/>
            <br/>
            <p>
                Currently in the studio for our second studio album. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum cursus venenatis. Cras id venenatis risus, sit amet laoreet urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aliquam erat volutpat. Nunc id elit magna. Pellentesque accumsan ligula nec erat pharetra suscipit. Mauris vitae libero lorem. Suspendisse potenti. Integer a urna sit amet dui tempus congue.
            </p>
            <p>
                Proin euismod nisi non lacus fringilla varius. Pellentesque vel nisi gravida, ultrices enim a, tempor quam. Etiam aliquam dolor ligula, vitae blandit eros congue eget. Pellentesque nec urna imperdiet, tempor massa vel, ultricies ante. Nunc neque est, egestas nec dui ut, vestibulum pretium nunc. Cras ut congue quam. Quisque ut erat eu massa mattis molestie. Aenean et lorem aliquet, consectetur velit quis, feugiat neque. Donec euismod odio mollis vehicula commodo. Aenean faucibus eleifend nisi id pulvinar. Ut nunc erat, venenatis varius convallis a, semper et sapien. Nam vel volutpat dui. Morbi lectus neque, suscipit in tempus euismod, blandit eget diam. Praesent non venenatis orci. Maecenas in eros accumsan, rutrum lacus ac, dictum orci. Quisque eu pretium lorem.
            </p>
            <p>
                Praesent nunc ligula, euismod vel sapien id, ultrices volutpat velit. Ut feugiat urna enim, at ultrices est imperdiet ac. Vestibulum felis ex, posuere id aliquet nec, gravida sed nibh. Aenean id gravida eros. Proin aliquet dapibus sagittis. Nunc facilisis enim quam, sed convallis velit lacinia non. Mauris ornare eleifend augue vitae lobortis. Pellentesque in ante eget sem tempor accumsan.
            </p>
            <p>
                Sed quis tincidunt quam. In suscipit diam eros, et placerat ligula sollicitudin id. Donec quis dignissim odio. Nam ultrices aliquet purus, a tempor massa varius a. Quisque at orci at mauris convallis faucibus vitae vulputate purus. Praesent porttitor semper ipsum, nec facilisis nisl cursus eu. Sed bibendum augue lacus, ac rutrum risus semper sed. In aliquam hendrerit quam eu auctor. Vivamus et elit volutpat, mattis tellus a, consectetur nibh. Nullam lorem nulla, cursus sit amet placerat ut, lacinia in enim.
                </p>
            <p>
                Cras mattis sapien vitae posuere tempor. Nam tincidunt, sem vel tincidunt molestie, lacus ipsum blandit purus, vel condimentum enim neque vitae diam. Proin congue efficitur eros non vestibulum. Sed maximus metus vel nulla porta mollis. Maecenas ut accumsan augue. In in lectus eu purus condimentum porttitor a sed risus. Mauris ac vestibulum purus, non dignissim mauris.
            </p>
            <br/>
            <h1 class='header'>Videos Below</h1>
        {showVideos ? <DisplayAll/> : null}    
        </div>
        </>
    )
}

export default Music




