import React, { Component } from "react";
import { render } from "react-dom";
import Dialog from "../../src";

class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dialog
          isOpen={true}
          title={'Изменение настроек'}
          content={<div>Вы изменили настройки учетной записи.<br/>
            Вы уверены, что хотите не сохранять их?</div>}
          onOverlayClick={e => console.log('Overlay clicked, now close')}
          buttons={[
            {
              children: 'Отменить изменения',
              onClick: e => console.log('Отменить изменения')
            },
            {
              children: 'Сохранить изменения',
              onClick: e => console.log('Сохранить изменения')
            }
          ]}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
