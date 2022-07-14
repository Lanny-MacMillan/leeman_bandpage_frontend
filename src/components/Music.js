import RssFeedIcon from '@mui/icons-material/RssFeed';
import AppleIcon from '@mui/icons-material/Apple';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EqualizerIcon from '@mui/icons-material/Equalizer';



const Music = () => {



    return (
        <>
        <br/>
        <h1>Music Page</h1>
        <br/>
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
export default Music