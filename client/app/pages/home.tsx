import React, {Component} from "react";
import MasterLayout from "../layouts/master";

export default class HomePage extends Component<any, any> {
    componentDidMount(props) {

        //this.props.history.push('/about');
    }
    componentWillMount(){
        this.props.history.push('/about');
    }
    render() {

        return (
                <MasterLayout>
                    <div className="row">
                        <h2>HomeView</h2>
                    </div>
                </MasterLayout>
        );
    }
};


