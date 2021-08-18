import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop:30,
    width:400
  },
  media: {
    height: 140,
  },
});

type prop = {
    food:string,
    description:string,
    imgSrc:string,

}

function FoodCard(prop:prop):JSX.Element{
    const {food, description, imgSrc} = prop;
    const classes = useStyles();

    return(
       <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={imgSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {food}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
      </Card>       
    )
}

export default FoodCard;