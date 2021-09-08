import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Registration() {
	const classes = useStyles();

	return (
		<section>
			<Card className={classes.root}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Registration
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Create a new account to work with this application
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</section>
	);
}
export default Registration;
