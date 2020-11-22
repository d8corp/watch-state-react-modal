import React, { Component, createRef } from 'react';

class Modals extends Component {
    constructor() {
        super(...arguments);
        this.ref = createRef();
    }
    onClose(e) {
        var _a;
        const element = this.ref.current.lastChild;
        (_a = element.component) === null || _a === void 0 ? void 0 : _a.close('background');
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
    render() {
        return (React.createElement("div", Object.assign({ ref: this.ref }, this.props, { onClick: e => this.onClose(e) }), this.props.children));
    }
}

export default Modals;
