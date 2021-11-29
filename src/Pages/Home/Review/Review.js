import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Rating } from '@mui/material';



const Review = (props) => {
    // const [expanded, setExpanded] = React.useState(false);
    const { user } = useState();
    const { name, comment, rating } = props.review;
    console.log(props)
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {name.slice(0, 1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader="September 14, 2016"
                />
                {
                    user?.photoURL && <CardMedia
                        component="img"
                        height="194"
                        image={user.photoURL}
                        alt="Paella dish"
                    />
                }
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                    <Typography sx={{ pt: 3 }} variant="body2" >
                        <Rating
                            name="read-only"
                            value={rating}
                            readOnly
                        />
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>
            </Card>
        </Grid>

    );
};

export default Review;