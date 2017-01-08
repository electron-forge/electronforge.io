import React, { PureComponent } from 'react';

import { PrimarySection, SubtronSection } from '../PageSections';
import ForgeTemplateBanner from './ForgeTemplateBanner';
import Separator from '../Separator';

import templates from './templates';

export default class TemplatesPage extends PureComponent {
  render() {
    return (
      <div>
        <SubtronSection
          title="Forge Templates"
        >
          With Electron Forge, getting started with your favourite framework has never been easier.
          Powered by Electron Compile you can use your favorite ES6/7 features with your favourite frameworks without any setup.
        </SubtronSection>
        <PrimarySection>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {
              templates.map((template, index) => (
                <div key={template.name}>
                  <ForgeTemplateBanner template={template} />
                  {
                    index !== templates.length - 1 ?
                      <Separator /> :
                      null
                  }
                </div>
              ))
            }
          </div>
        </PrimarySection>
      </div>
    );
  }
}
