import React, {
	Component
} from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';

export default class FormContact extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			senderRes: []
		}
	}

	validateInputs = () => {
		if (this.state.name === "" || this.state.email === "" || this.state.subject === "" || this.state.message === "") {
			return false;
		}
		return true;
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		let resumeData = this.props.resumeData;
		
		if (this.validateInputs()) {
			this.sendForm()
		} else {
			alert(resumeData.emptyInputs)
			this.recaptcha.reset();
		}
	}

	sendForm = () => {

		this.recaptcha.execute();

		let mailAPI = 'https://contact.princelle.org/php/email.php';

		var data = {
			name: this.state.name,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message,
			captchaToken: this.recaptcha.getResponse()
		};

		var fd = new FormData();

		for (var i in data) {
			fd.append(i, data[i]);
		}

		let fetchData = {
			method: 'POST',
			body: fd
		};

		let resumeData = this.props.resumeData;
			
		fetch(mailAPI, fetchData)
			.then(function (response) { console.log(response.clone().text()); return response.clone().json(); })
			.then(function (data) {
				var resMail = data.reSender

				if (resMail === "SPAM") {
					alert(resumeData.spamMsg)

				} else if (resMail === "ERROR") {
					alert(resumeData.errorMsg)

				} else if (resMail === "SUCCESS") {
					alert(resumeData.successMsg)

				} else {
					alert(resumeData.errorMsg)
				}
			});
		
			this.cleanState();
	}

	cleanState = () => {
		this.setState({
			name: "",
			email: "",
			subject: "",
			message: "",
			senderRes: [],
			captchaToken: ""
		})
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
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required name="name" id="contact-name" placeholder={resumeData.formNamePlaceholder} value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text"/>
						</div>
                    
						<div>
							<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-email">{resumeData.formMailLabel}</label>
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required id="contact-email" name="emailcontact" placeholder={resumeData.formMailPlaceholder} value={this.state.email} onChange={e => this.setState({ email: e.target.value })} type="email"/>
						</div>

						<div>
							<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-subject">{resumeData.formSujetLabel}</label>
							<input style={{ width: "100%", marginBottom: "1.2rem" }} required name="subject" id="contact-subject" placeholder={resumeData.formSujetPlaceholder} value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} type="text"/>
						</div>

						<label style={{ color: "#FFF", fontSize: ".9rem" }} htmlFor="contact-message">{resumeData.formMsgLabel}</label>
						<textarea style={{ width: "100%", marginBottom: "1.2rem" }} required name="message" placeholder={resumeData.formMsgPlaceholder} id="contact-message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"></textarea>

						<Recaptcha
							ref={ ref => this.recaptcha = ref }
							sitekey="6LcW_50UAAAAAIkoYhnzArKuIacxIz492g-mUzPn"
							badge="bottomleft"
							locale = {
								resumeData.locCaptcha
							}
							//onResolved={() => console.log('Human detected.')} 
						/>
	
						<input className="btn" style={{ width: "100%" }} onClick={(e) => this.handleFormSubmit(e)} type="submit" name="submit" value={resumeData.btnSend} />
					</form>
				</div>
			</div>
		)
	}
}
