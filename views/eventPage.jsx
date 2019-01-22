var React = require('react');
var Default = require('./default');

class EventPage extends React.Component {
    render() {
        let eventCard = this.props.obj.rows.map(obj => {
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 card-wrapper">
                    <div className="card-deck">
                        <div className="card">
                            <iframe className="iframe" src={obj.photo}></iframe>
                            <div className="card-body">
                                <h5 className="card-title">{obj.event_name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{obj.event_type}</li>
                                <li className="list-group-item">{obj.location}</li>
                                <li className="list-group-item">{obj.meeting_time}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <Default>
                <div className="flexbox">
                    {eventCard}
                </div>
            </Default>
        )
    }
}

module.exports = EventPage;