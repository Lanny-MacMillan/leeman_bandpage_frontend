import '../App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Contact = (props) => {
    

    return (
        <>
        <div id='aboutBackground' 
        style={{ 
            background: '#757575'
            }}>
        Contact the Band
        <Button
                variant="contained"
                size="large"
                color="primary"
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:bigmood@gmail.com`}
                >
            <Typography variant="button" style={{ fontSize: '0.69rem' }}>
                Send Documents
            </Typography>
        </Button>

        </div>
        </>
    )
}
export default Contact