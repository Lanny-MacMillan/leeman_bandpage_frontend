import Leeman from '../images/DrumsSolo.jpg'
import Singing from '../images/Singing.jpg'
import Guitarist from '../images/guitaristSolo.jpg'
import Background from '../images/The-Strain-100-Vertices.jpeg'
import Guitarists from '../images/Guitarists.jpg'





function About() {


    return (
        <>
        <div id='aboutBackground' 
            style={{ 
                // backgroundImage: `url('https://i.imgur.com/3oHhx7I.jpg')`
                background: '#757575'
                }}>
        <div class="container">
            <div class="member1">
                <h4>Matt Leeman - Drums</h4>
            </div>
            <div class="bandMateImg1">
                <img
                    className="d-block d-md-block d-lg-block w-100 img-fluid"
                    src={Leeman}
                    alt="Matt Leeman-Drums"
                />
            </div>
            <div class="member2">
                <h4>Tim - Vocals, Guitar</h4>
            </div>
            <div class="bandMateImg2">
                <img
                    className="d-block w-100"
                    src={Singing}
                    alt="Third slide"
                />
            </div>
            <div class="member3">
                <h4>Jack - Lead Guitar</h4>
            </div>
            <div class="bandMateImg3">
                <img
                    className="d-block w-100"
                    src={Guitarist}
                    alt="Third slide"
                />
            </div>
            <div class="member4">
                <h4>Myke - Bass</h4>
            </div>
            <div class="bandMateImg4">
            <img
                    className="d-block w-100"
                    src={Guitarists}
                    alt="Third slide"
                />
            </div>
            <div class="bandMateAbout1">
                <p id='memberInfo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="bandMateAbout2">
            <p id='memberInfo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div class="bandMateAbout3">
            <p id='memberInfo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div class="bandMateAbout4">
            <p id='memberInfo'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        </div>
        </div>
        </>
    );
}

export default About;