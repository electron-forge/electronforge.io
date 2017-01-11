import React, { PureComponent, PropTypes } from 'react';

import BashBlock, { Comment, Line } from '../BashBlock';

// import styles from './CLIDoc.scss';

export default class CLIDoc extends PureComponent {
  static propTypes = {
    doc: PropTypes.shape({
      command: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      usage: PropTypes.arrayOf(PropTypes.shape({
        line: PropTypes.string,
        comment: PropTypes.string,
      })).isRequired,
      arguments: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        value: PropTypes.bool,
      })).isRequired,
    }).isRequired,
  };

  render() {
    const { doc } = this.props;

    return (
      <div>
        <h1>{doc.command}</h1>
        <h2>Usage</h2>
        <BashBlock fullWidth>
          {
            doc.usage.map((use, index) => {
              if (use.comment) {
                return <Comment key={index} value={use.comment} />;
              } else if (use.line) {
                return <Line key={index} value={use.line} />;
              }
              return null;
            })
          }
        </BashBlock>
        <h2>Description</h2>
        {
          doc.description.map(s => <p>{s}</p>)
        }
        <h2>Arguments</h2>
        {
          doc.arguments.length === 0 ?
            <i>No Arguments</i> :
            doc.arguments.map(arg => (
              <div>
                <h3>--{arg.name}{arg.value ? '=[value]' : ''}</h3>
                <p>{arg.description}</p>
              </div>
            ))
        }
      </div>
    );
  }
}
