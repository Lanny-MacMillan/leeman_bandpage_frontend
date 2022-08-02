import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { GiAudioCassette } from "react-icons/gi";
import { SiItunes } from "react-icons/si";

const Home = () => {



    return (
        <>
            <div id='homeBackground' 
                style={{ 
                    backgroundImage:`url('https://c1.wallpaperflare.com/preview/844/100/925/music-show-concert-live.jpg')` 
                    }}>
                        <br/>
                        <br/>
                <h1 id='h1HomeMain'>Big Mood's Big BandPage</h1>
                <br/>
                <br/>
                <h4 id='h1Home'>Here are a few other places you can find us!</h4>
                <div id='iconContainer'>
                    <h3>
                        <a href="https://www.facebook.com/bigmoodband/" target="_blank">
                            <FaFacebookSquare id='FaFacebookSquare'/>
                        </a>
                        <a href="https://www.instagram.com/bigmoodofficial/" target="_blank">
                            <FaInstagram id='FaInstagram' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCLtYoxvuULI2mnng4q32-mA/featured" target="_blank">
                            <FaYoutube id='FaYoutube'/>
                        </a>
                        <a href="https://open.spotify.com/album/0T4LqIiac0s7lobcy4kCLL" target="_blank">
                            <FaSpotify id='FaSpotify'/>
                        </a>
                        <a href="https://music.apple.com/us/album/late-nights-single/1442416001?at=1000lM6c&uo=4&app=apple" target="_blank">
                            <SiItunes id='SiItunes'/>
                        </a>
                        <a href="https://bigmood.hearnow.com/" target="_blank">
                            <GiAudioCassette id='GiAudioCassette'/>
                        </a>
                    </h3>
                </div>

            </div>

        </>
    )
}
export default Home
