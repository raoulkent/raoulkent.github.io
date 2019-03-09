import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jdenticon from 'jdenticon';

class ProjectIcon extends Component {
    componentDidMount() {
        jdenticon();
    }

    render() {

        const {sideLength, projectName} = this.props;

        return (
                <svg width={sideLength} height={sideLength} data-jdenticon-value={projectName}> </svg>
        );
    }
}

ProjectIcon.defaultProps = {
    sideLength: 150,
}

ProjectIcon.propTypes = {
    projectName: PropTypes.string.isRequired,
    sideLength: PropTypes.number,
};

export default ProjectIcon;
