import React, { PureComponent, PropTypes } from 'react';

export default class VueSVG extends PureComponent {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  };

  render() {
    const { width, height } = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width={`${width}px`} height={`${height}px`} version="1.1">
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)">
          <g transform="translate(178.0626,235.0086)">
            <path fill="#4dba87" fillOpacity={1} fillRule="nonzero" stroke="none" d="M 0,0 -22.669,-39.264 -45.338,0 h -75.491 L -22.669,-170.017 75.491,0 Z" />
          </g>
          <g transform="translate(178.0626,235.0086)">
            <path fill="#435466" fillOpacity={1} fillRule="nonzero" strok="none" d="M 0,0 -22.669,-39.264 -45.338,0 H -81.565 L -22.669,-102.01 36.227,0 Z" />
          </g>
        </g>
      </svg>
    );
  }
}
