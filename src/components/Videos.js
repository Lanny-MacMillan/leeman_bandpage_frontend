import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Big Mood - Might Be Me',
        channel: 'Big Mood',
        views: '1.5 k views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Big Mood - Vertigo',
        channel: 'Big Mood',
        views: '1.1 k views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Big Mood - Slippin',
        channel: 'Big Mood',
        views: '687 views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Big Mood - Let Go',
        channel: 'Big Mood',
        views: '682 views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Big Mood - Let Go',
        channel: 'Big Mood',
        views: '426 views',
        createdAt: '2 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Big Mood - Ricochet',
        channel: 'Big Mood',
        views: '322 views',
        createdAt: '2 years ago',
    },
];

function Videos(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="wrap">
            {(loading ? Array.from(new Array(5)) : data).map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                {item ? (
                    <img
                    style={{ width: 210, height: 118 }}
                    alt={item.title}
                    src={item.src}
                    />
                ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                )}
        
                {item ? (
                    <Box sx={{ pr: 2 }}>
                    <Typography gutterBottom variant="body2">
                        {item.title}
                    </Typography>
                    <Typography display="block" variant="caption" color="black">
                        {item.channel}
                    </Typography>
                    <Typography variant="caption" color="black">
                        {`${item.views} • ${item.createdAt}`}
                    </Typography>
                    </Box>
                ) : (
                    <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    </Box>
                )}
                </Box>
            ))}
            </Grid>
        );
    }
    Videos.propTypes = {
    loading: PropTypes.bool,
    };

    export default function YouTube() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
        <Videos loading />
        <Videos />
        </Box>
    );
}
