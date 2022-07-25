import '../App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Contact = (props) => {
    

    return (
        <>
<div id='merchBackground' 
    style={{ 
        background: '#757575'
    }}>
    <div className="showContainer">
    <h1 id='imagesH1'>Contact The Band</h1>
    </div>
    <br/>
    <Button
                variant="contained"
                size="large"
                color="primary"
                target="_blank"
                // target="_top"
                rel="noopener noreferrer"
                href={`mailto:bigmood@gmail.com`}
                >
            <Typography variant="button" style={{ fontSize: '0.69rem' }}>
                Click Here
            </Typography>
        </Button>

</div>
        </>
    )
}
export default Contact

