import React, {Component} from 'react';

import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

//Higher-Order Components (HOC)
const withData = (View) => {
    return class extends Component {

        state = {
            data: [],
            loading: true,
            error: false
        };

        componentDidMount() {
            this.setState({
                loading: true,
                error: false
            });

            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        };

        render() {
            const {data, loading, error} = this.state;

            if (loading) {
                return <Spinner/>
            }

            if (error) {
                return <ErrorIndicator/>;
            }

            return <View {...this.props} data={data}/>
        }

    }
};

export default withData;