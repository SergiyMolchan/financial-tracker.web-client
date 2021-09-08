import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registration } from './registrationSlice';

function Registration() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const registrationSchema = Yup.object().shape({
		login: Yup.string()
			.min(5, 'Minimum 5 characters')
			.max(128, 'Maximum 128 characters')
			.required('Login is required'),
		password: Yup.string()
			.min(5, 'Minimum 5 characters')
			.max(128, 'Maximum 128 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.min(5, 'Minimum 5 characters')
			.max(128, 'Maximum 128 characters')
			.required('Confirm password'),
	});

	const formik = useFormik({
		initialValues: {
			login: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema: registrationSchema,
		onSubmit: values => {
			console.log(JSON.stringify(values));
			dispatch(registration(values));
		},
	});

	return (
		<section className={classes.wrapperVerticalCentred}>
			<Card className={classes.root}>
				<CardActionArea  style={{ borderBottom: '1px solid silver' }}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2" align='center'>
							Registration
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p" align='center'>
							Create a new account to work with this application
						</Typography>
					</CardContent>
				</CardActionArea>
				<form onSubmit={formik.handleSubmit} className={classes.inputColumn} noValidate>

					<TextField
						className={classes.input}
						required
						id="login"
						label="Login"
						name="login"
						onChange={formik.handleChange}
						value={formik.values.login}
						error={!!(formik.touched.login && formik.errors.login)}
						helperText={formik.touched.login && formik.errors.login}
					/>

					<TextField
						className={classes.input}
						required
						id="password"
						label="Password"
						type="password"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						error={!!(formik.touched.password && formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>

					<TextField
						className={classes.input}
						required
						id="confirmPassword"
						label="Confirm password"
						type="password"
						name="confirmPassword"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
						error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
						helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
					/>

					<CardActions>
						<Button size="small" color="primary" type="submit">
							Registration
						</Button>
						<Link href="#" style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
							Login
						</Link>
					</CardActions>
				</form>
			</Card>
		</section>
	);
}
export default Registration;
