import React, {
	Component
} from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';

export default class FormContact extends Component {
	
	constructor(props) {
	  super(props)
	
	  this.state = {
		  name: "",
		  email: "",
		  subject: "",
		  message: "",
		  mailSent: false,
		  error: null,
		  sentForm: false
	  }
	}

	handleFormSubmit = e => {
		e.preventDefault();
		axios({
				method: 'post',
				url: (process.env.PUBLIC_URL + '/php/email.php'),
				headers: {
					'content-type': 'application/json',
					'Allow-Control-Allow-Origin': '*'
				},
				data: this.state
			})
			.then(result => {
				this.setState({
					mailSent: result.data.sent,
					name: "",
					email: "",
					subject: "",
					message: "",
					sentForm: true
				})
			})
			.catch(error => {
				this.setState({
					error: error.message,
					name: "",
					email: "",
					subject: "",
					message: error.message,
					sentForm: true
				})
			});
	};

	handleResponse = (props) => {
		this.setState({
			sentForm: false
		})

		if (!this.state.mailSent) {
			if (this.state.error === "SPAM") {
				return (
					Alert.warning(props.spamMsg, {
						position: 'top-right',
						effect: 'scale',
						timeout: '3500'
					})
				)
			} else {
				return (
					Alert.error(props.errorMsg, {
						position: 'top-right',
						effect: 'scale',
						timeout: '3500'
					})
				)
			}
		} else {
			return (
				Alert.success(props.successMsg, {
					position: 'top-right',
					effect: 'scale',
					timeout: '3500'
				})
			)
		}
		
	}
	
	
	render() {

		let resumeData = this.props.resumeData;

		return (
			<div className="form-container">
				<div className="form">
					<h3 style={{ color: "#FFF", paddingBottom: "1rem" }}>{resumeData.formTitle}</h3>

					<form id="contact-form">
						<div>
							<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-name">{resumeData.formNameLabel}</label>
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required type="text" name="name" id="contact-name" placeholder={resumeData.formNamePlaceholder} value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
						</div>
                    
						<div>
							<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-email">{resumeData.formMailLabel}</label>
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required type="email" id="contact-email" name="emailcontact" placeholder={resumeData.formMailPlaceholder} value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
						</div>

						<div>
							<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-subject">{resumeData.formSujetLabel}</label>
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required type="text" name="subject" id="contact-subject" placeholder={resumeData.formSujetPlaceholder} value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })}/>
						</div>

						<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-message">{resumeData.formMsgLabel}</label>
						<textarea style={{ width: "100%", marginBottom: "1.2rem" }} required name="message" placeholder={resumeData.formMsgPlaceholder} id="contact-message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>

						<input className="btn" style={{ width: "100%" }} onClick={e => this.handleFormSubmit(e)} type="submit" name="submit" value={resumeData.btnSend} />
					</form>
				</div>

				{
					this.state.sentForm && (this.handleResponse(resumeData))
				}
			</div>
		)
	}
}
