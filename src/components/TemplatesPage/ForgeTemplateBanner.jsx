import React, { PureComponent, PropTypes } from 'react';

import styles from './ForgeTemplateBanner.scss';

export default class ForgeTemplateBanner extends PureComponent {
  static propTypes = {
    template: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired,
      description: PropTypes.string.isRequired,
    }),
  };

  render() {
    const { template: { name, icon, description } } = this.props;
    const IconClass = icon;

    return (
      <div className={styles.template}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}><IconClass width={120} height={120} /></div>
        </div>
        <div className={styles.description}>
          <h1 className={styles.name}>{name}</h1>
          {description}
        </div>
      </div>
    );
  }
}
