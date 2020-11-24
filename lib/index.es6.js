import { __decorate } from 'tslib';
import React, { Component, createRef } from 'react';
import style, { classes } from 'react-html-classes';
import watch, { state, mixer, event } from '@watch-state/react';
export { default as Modals } from './Modals.es6.js';

class Popup extends Component {
    constructor() {
        super(...arguments);
        this.ref = createRef();
    }
    componentDidMount() {
        this.props.onShow();
        this.ref.current.component = this;
    }
    close(result) {
        this.props.onClose(result);
    }
    render() {
        return (React.createElement("div", { ref: this.ref, onClick: e => e.stopPropagation(), className: this.props.className }, this.props.children));
    }
}
const styles = {
    root: '',
    header: '',
    title: '',
    subButtons: '',
    subButton: '',
    content: '',
    closing: '',
    opening: '',
    buttons: '',
    button: '',
};
let displayed = 0;
let Modal = class Modal extends Component {
    constructor() {
        super(...arguments);
        this.closing = false;
        this.opening = false;
        this.opened = false;
    }
    get open() {
        const { open = true } = this.props;
        return typeof open === 'function' ? open() : open;
    }
    get show() {
        if (!this.open && this.opened) {
            setTimeout(() => this.close('open'));
        }
        return this.open || this.opened;
    }
    componentDidMount() {
        if (this.props.close) {
            this.props.close(e => this.close(e));
        }
    }
    componentWillUnmount() {
        if (this.open) {
            displayed--;
            if (!displayed) {
                document.body.style.overflow = '';
            }
        }
    }
    close(button) {
        if (!this.closing && this.opened) {
            if (this.props.onWillClose) {
                this.props.onWillClose(button, () => this.onWillClose(button));
            }
            else {
                this.onWillClose(button);
            }
        }
    }
    onWillClose(button) {
        const { delay } = this.props;
        if (delay) {
            this.closing = true;
            setTimeout(() => this.onClose(button), delay);
        }
        else {
            this.onClose(button);
        }
    }
    onClose(button) {
        if (this.props.onClose) {
            this.props.onClose(button);
        }
        this.closing = false;
        if (!this.open) {
            this.opened = false;
            displayed--;
            if (!displayed) {
                document.body.style.overflow = '';
            }
        }
    }
    onShow() {
        const { delay, onShow } = this.props;
        this.opened = true;
        if (delay) {
            clearTimeout(this.showTimer);
            this.opening = true;
            this.showTimer = setTimeout(() => this.opening = false, delay);
        }
        if (onShow) {
            onShow();
        }
        if (!displayed) {
            document.body.style.overflow = 'hidden';
        }
        displayed++;
    }
    get buttons() {
        const { buttons, buttonsOverride } = this.props;
        if (!(buttons === null || buttons === void 0 ? void 0 : buttons.length))
            return null;
        return (React.createElement("div", { className: styles.buttons }, buttons.map(button => (React.createElement("button", { "data-button": button, className: styles.button, key: button, onClick: () => this.close(button) }, (buttonsOverride && buttonsOverride[button]) || button)))));
    }
    get children() {
        const { children } = this.props;
        return children ? (React.createElement("div", { className: styles.content }, children)) : null;
    }
    get subButtons() {
        const { subButtons, buttonsOverride } = this.props;
        return subButtons && subButtons.length ? (React.createElement("div", { className: styles.subButtons }, subButtons.map(button => (React.createElement("button", { "data-button": button, className: styles.subButton, key: button, onClick: () => this.close(button) }, (buttonsOverride && buttonsOverride[button]) || button))))) : null;
    }
    get title() {
        let { title } = this.props;
        if (title) {
            return (React.createElement("div", { className: styles.title }, title));
        }
        return null;
    }
    get header() {
        const { title, subButtons } = this.props;
        if (!title && !(subButtons && subButtons.length)) {
            return null;
        }
        return (React.createElement("div", { className: styles.header },
            this.title,
            this.subButtons));
    }
    render() {
        return this.show ? (React.createElement(Popup, { className: classes(styles.root, this.opening && styles.opening, this.closing && styles.closing), onShow: () => this.onShow(), onClose: result => this.close(result) },
            this.header,
            this.children,
            this.buttons)) : null;
    }
};
__decorate([
    state
], Modal.prototype, "closing", void 0);
__decorate([
    state
], Modal.prototype, "opening", void 0);
__decorate([
    state
], Modal.prototype, "opened", void 0);
__decorate([
    mixer
], Modal.prototype, "open", null);
__decorate([
    mixer
], Modal.prototype, "show", null);
__decorate([
    event
], Modal.prototype, "onWillClose", null);
__decorate([
    event
], Modal.prototype, "onClose", null);
__decorate([
    event
], Modal.prototype, "onShow", null);
Modal = __decorate([
    watch,
    style(styles)
], Modal);
var Modal$1 = Modal;

export default Modal$1;
