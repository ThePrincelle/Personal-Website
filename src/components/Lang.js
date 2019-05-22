import React, {
	Component
} from 'react';

export default class Lang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			btnLangMenu: false,
			langMenu: false,
			langMenuFocus: false
		};
	}

	handleFocusLang(focus) {
		this.setState({
			langMenuFocus: focus,
			btnLangMenu: focus
		})
	}

	async handleLangBtn() {
		var menu;
		if (this.state.langMenu) {
			menu = false;
		} else {
			menu = true;
		}
		await this.setState({
			langMenu: menu,
			btnLangMenu: menu
		})
		await this.timeoutLangMenu()
	}

	async timeoutLangMenu() {
		if (this.state.langMenu) {
			setTimeout(() => {
				if (this.state.langMenuFocus) {
					this.timeoutLangMenu()
				} else {
					this.setState({
						langMenu: false,
						btnLangMenu: false
					})
				}
			}, 3500);
		}
	}

	render() {

		let resumeData = this.props.resumeData;
		let curr_page = this.props.curr_page;

		if (curr_page !== "") {
			curr_page = "/" + curr_page;
		}

	  return (
		<div>
		  <div className="lang-button-container">
			<div className="dropup">
				<button className={this.state.langMenu ? 'dropbtn dropbtn-zoom' : 'dropbtn'} onClick={() => this.handleLangBtn()}>{resumeData.changeLang}</button>
				<div className={this.state.langMenu ? 'dropup-content langDisp' : 'dropup-content'} onMouseOver={() => this.handleFocusLang(true)} onMouseLeave={() => this.handleFocusLang(false)}>
					{
						resumeData.langs.map(lang => {
							return (<a key={lang[1]} href={lang[0] + curr_page}>{lang[1]}</a>)
						})
					}
				</div>
			</div>
		</div>
		</div>
	  )
	}

}
