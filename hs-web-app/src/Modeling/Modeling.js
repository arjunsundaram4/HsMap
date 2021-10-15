import React, {Component} from 'react';
import './Modeling.css';
import {FourierBasedAnalysis} from './Components/FourierBasedAnalysis/FourierBasedAnalysis'
import {CompartmentalNetworkModel} from './Components/CompartmentalNetworkModel/CompartmentalNetworkModel'
import {InteractiveModel} from './Components/InteractiveModel/InteractiveModel'
import { Tabs } from '../Components/Tabs/Tabs';
import { Bar } from '../Components/Bar/Bar';

class Modeling extends Component{
	constructor(props) {
		super(props);
		this.state = {...this.state,currentTab: 0 };
	}
	tabs=[
		{
			name: "Fourier-Based Analysis",
			location: <FourierBasedAnalysis/>
		},
		{
			name: "Compartmental Network Model",
			location: <CompartmentalNetworkModel/>
		},
		{
			name: "Interactive Model",
			location: <InteractiveModel/>
		}
	]
	onSelectedItem=(index)=>{
		this.setState({ ...this.state, currentTab: index});
	}
	render() {
		return(
			<div className={"bodyMarginTop"}>
				<Tabs selectedIndex={this.state.currentTab} items={this.tabs} onSelectedItem={this.onSelectedItem}/>
				<Bar/>
				{this.tabs[this.state.currentTab].location}
			</div>
		)
	}
}

export default Modeling;
