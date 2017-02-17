import React, { PureComponent, PropTypes } from 'react';

import BashBlock, { Comment, Line } from '../BashBlock';

export default class ConfigPropDoc extends PureComponent {
  static propTypes = {
    prop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      module: PropTypes.string,
      example: PropTypes.object.isRequired,
      required: PropTypes.bool.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      footer: PropTypes.node,
    }).isRequired,
  };

  render() {
    const { prop } = this.props;

    return (
      <div>
        <h1>{prop.name}</h1>
        <h2>Example</h2>
        <code>
          <pre>
            {
              JSON.stringify(prop.example, null, 2)
            }
          </pre>
        </code>
        <h2>Description</h2>
        {
          prop.description.map((s, index) => <p key={index}>{s}</p>)
        }
        {
          prop.footer || null
        }
      </div>
    );
  }
}
