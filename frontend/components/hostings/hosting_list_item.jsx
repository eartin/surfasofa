import React from 'react';

const HostingListItem = (props) => {
    const { description, longitude, latitude } = props.hosting;
    return (
        <ul className="hosting-list-item">
            <li className="hosting-item-decription">
                { description }
            </li>
            <li className="">
                { longitude }
            </li>
            <li className="">
                { latitude }
            </li>
        </ul>
    )
}

export default HostingListItem;