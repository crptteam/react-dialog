import React from "react";
import { Dialog } from "../src/";
import { mount } from "enzyme";

describe("Dialog", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <Dialog
        isOpen={true}
        title={'Изменение настроек'}
        content={<div>Вы изменили настройки учетной записи.<br/>
          Вы уверены, что хотите не сохранять их?</div>}
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
    );

    expect(wrapper).toMatchSnapshot();
  });
});
