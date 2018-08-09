import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import defaultTheme from "../theme/defaultTheme";

import { Overlay } from "../styled/Overlay";
import { Wrap } from "../styled/Wrap";
import { Header } from "../styled/Header";
import { Content } from "../styled/Content";
import { ButtonsWrap } from "../styled/ButtonsWrap";
import { Button } from "../styled/Button";

class Dialog extends Component {
  wrap;

  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
  }

  renderButton(props, i) {
    return <Button key={i} {...props} />;
  }

  onOverlayClick(e) {
    if (e.target === e.currentTarget) {
      this.props.onOverlayClick && this.props.onOverlayClick(e);
    }
  }

  render() {
    const { isOpen, title, content, buttons, ...otherProps } = this.props;

    return (
      <Overlay show={isOpen} onClick={this.onOverlayClick}>
        <Wrap ref={el => (this.wrap = el)}>
          {title ? <Header>{title}</Header> : null}
          <Content>{content}</Content>
          <ButtonsWrap>
            {Array.isArray(buttons) ? buttons.map(this.renderButton) : null}
          </ButtonsWrap>
        </Wrap>
      </Overlay>
    );
  }
}

Dialog.propTypes = {
  theme: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  buttons: PropTypes.array.isRequired,
  onOverlayClick: PropTypes.func
};

Dialog.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Dialog);
