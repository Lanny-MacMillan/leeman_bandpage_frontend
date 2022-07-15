
const Videos = () => {
    const channel_ID=''
    const youTubeLink = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=${channel_ID}&part=snippet,id&order=date&maxResults=20`
    // After that you will receive a JSON with video ids and details, and you can construct your video URL like this:
    // const video_ID = ''
    // const videoURL = `http://www.youtube.com/watch?v=${video_ID}`

    return (
        <>
        
        <h1>Videos Page</h1>
        
        </>
    )
}

export default Videos