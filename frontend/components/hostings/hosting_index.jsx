import React from 'react';
import HostingListItem from './hosting_list_item';

class HostingIndex extends React.Component{
    componentDidMount(){
        this.props.fetchHostings();
    }

    render(){
        const hostingsList = this.props.hostings.map(hosting => (
            <HostingListItem
                key={ hosting.id }
                hosting={ hosting }
            />
        ))

        return (
            <div className="hosting-list-container">
                <ul className="hosting-list">
                    { hostingsList }
                </ul>
            </div>
        )
    }
}

export default HostingIndex;