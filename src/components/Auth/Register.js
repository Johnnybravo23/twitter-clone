import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    textField : {
        width : '100%',
        marginBotton : 5
    },
     btnBlock : {
         textAlign : 'center',
         marginBotton : 10,
         marginTop : 20
     }
}

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            login: '',
            password: '',
            password2: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        handleChange (e) {
            this.setState({ [e.target.name]: e.target.value })
        }
        handleSubmit (e) {
            e.preventDefault()
            const userData = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                password2: this.state.password2
            }
            console.log(userData)
        }
    render() {
        const { classes } = this.props;
        return (
            <Paper style={{ padding : 15}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        className = { classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                    />
                    <TextField
                        type="text"
                        label="UserName"
                        className = { classes.textField}
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="login"
                    />
                    <TextField
                        type="Password"
                        label="Password"
                        className = { classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />
                    <TextField
                        type="Password"
                        label="Confirm Password"
                        className = { classes.textField}
                        value={this.state.password2}
                        onChange={this.handleChange}
                        name="password2"
                    />
                    <div className={ classes.btnBlock}>
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
            )
    }
}

export default withStyles(styles)(Register);