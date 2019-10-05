import React, { Component, Fragment } from 'react'
import { List, Image } from 'semantic-ui-react'


 class EventListAttendee extends Component {
    render() {
        return (
            <Fragment>
                <List.Item>
                    <Image as='a' size='mini' circular src={this.props.attendee.photoURL} />
                </List.Item>
            </Fragment>
            
        )
    }
}
export default EventListAttendee