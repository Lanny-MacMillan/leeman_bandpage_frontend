import {useState, useEffect} from'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Edit from '../components/Edit'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


const AdminCrud = (props) => {
    const [shows, setShows] = useState([])
    const [showShows, setShowShows] = useState(true)
    const [showshow, setShowshow] = useState(false)
    const { loading = false } = props;

    const googleURL = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY}&q=`
    const APIBaseURL = 'https://leeman-backend.herokuapp.com/api/shows'

    const getShows = () => {
        axios
            .get(APIBaseURL)
            .then(response => setShows(response.data),
            (err)=> console.error(err)
            )
            .catch((error)=> console.error(error))
    }
    const DisplayAll = () => {
        return (
            <>
        <div className='showContainer'>
            {shows.map((show) => {
            return(
                <Card sx={{ maxWidth: 400, m: 1 }}>
                <CardHeader
                    title={
                    loading ? (
                        <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <>
                        {show.venue}
                        </>
                    )
                    }
                    subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        <>
                        {show.date}
                        </>
                    )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                    component="img"
                    height="140"
                    image={show.image}
                    alt={show.venue}
                    />
                )}
        
                <CardContent>
                    {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                    ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                            <>
                        {show.description}
                        <br/>
                        <Button id='Button' variant="contained" onClick={() => {showPage(show)}} className="btn btn-link" role="button">Click for more</Button>

                            </>
                        }
                    </Typography>
                    
                    )}
                </CardContent>
                </Card>
        
            )
            })}
        </div>
        </>
        )
    }
    const DisplayOne = () => {
        return (
            <>
        <div className='showContainer'>
            {shows.map((show) => {
            return(
                <Card sx={{ height: 1500, maxWidth: 900, m: 1 }}>
                <CardHeader
                    title={
                    loading ? (
                        <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <>
                        <h3 id='title'>{show.venue}</h3>
                        <br/>
                        <h6>${show.coverPrice}.00</h6>
                        </>
                    )
                    }
                    subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        <>
                        <h6 id='textColor'>{show.date}</h6>
                        <h6 id='textColor'>{show.time}</h6>
                        </>
                    )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 390 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                    component="img"
                    height="340"
                    image={show.image}
                    alt={show.name}
                    />
                )}
        
                <CardContent>
                    {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                    ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                        <>
                        <p>{show.description}</p>
                        <h7 id='textColor'>More Information:</h7><br/>
                        {show.other}
                        <br/>
                        <Edit handleUpdate={handleUpdate} show={show}/>
                        <Button id='Button' type="button" variant="outlined"  data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete show
                        </Button>
                        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this Show Permanantly?
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                        <Button data-bs-dismiss="modal" onClick={() => {handleDelete(show)}}>
                        Delete</Button>
                    </div>
                    </div>
                </div>
                </div>
                <Button id='Button' type="button" variant="outlined" onClick={homePage}>Back</Button>

                        </>
                        
                        }
                    </Typography>
                    )}

                </CardContent>
                {loading ? (
                    <Skeleton sx={{ height: 490 }} animation="wave" variant="rectangular" />
                ) : (
                    <div className="mapsApi">
                    <h5 id='title'>{show.location}</h5>
                {/*============= GOOGLE MAPS API =============*/}
                    <iframe
                        className="map"
                        width='100%'
                        height='100%'
                        loading='lazy'
                        src={`${googleURL} + ${show.location}`}>
                    </iframe>
                {/*============= GOOGLE MAPS API =============*/}
                    </div>
                )}
                </Card>
                
            )
            })}
        </div>
        </>
        )
    }

    const homePage = () => {
        getShows()
        setShowShows(true)
        setShowshow(false)
    }
    const showPage = (selectedshow) => {
        setShowShows(false)
        setShowshow(true)
        setShows(shows.filter(show => show.id == selectedshow.id))
    }
    

    const handleUpdate =(editshow) => {
        console.log('before .put App.js')
        axios   
        // id updates ID in DB, editshow brings the info from that function
            .put(APIBaseURL + '/' + editshow.id, editshow)
            .then((response) => {
                setShows(shows.map((show) => {
                    console.log(show.id)
                    return show.id !== editshow.id ? show : response.data
            }))
            // getShows()
        })
    }

    const handleDelete = (deletedshow) => {
        axios
            .delete(APIBaseURL + '/' + deletedshow.id)
            .then((response) => {
                // Instead of pulling data and reloading this filters the data on page and removes the {deletedshow.id}
                // setShows(shows.filter(show => show.id !== deletedshow.id))
                homePage()
            })
    }


    useEffect(() => {
    getShows()
    }, [])
    return (
        <>
        {/* <div className="showContainer">
            <h1 id='title'>Shows</h1>
        </div> */}
        {showShows ? <DisplayAll/> : null}
        {showshow ? <DisplayOne/> : null}     
        
        </>
    )
}

export default AdminCrud