var React = require('react');
var Default = require('./default');

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div class="text-center">
                    <img src="https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg" class="rounded" alt="placeholder"/>
                </div>
            </Default>
        )
    }
};

module.exports = Home;