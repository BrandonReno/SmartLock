import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Button = styled.button`
  background-color:#7DF9FF;
  color: black;
  padding: 5px 15px;
  border-radius: 7px;
  outline:0;
  cursor:pointer;
  text-transform: uppercase;
  box-shadow: 2px 7px 7px black;
  transition: ease background-color 250ms;
  margin: 10px 20px;
  &:hover{
    background-color:#61DFE5
  }
  `
class State extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: '',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	};

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://127.0.0.1:8000/status', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			window.location.reload(false);
	}

	render() {
		const { user } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="user"
							value={user}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
                        <Button type="submit">Toggle Lock</Button>
                    </div>
				</form>
			</div>
		)
	}
}

export default State
