'use strict';

var tslib = require('tslib');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Modals = /** @class */ (function (_super) {
    tslib.__extends(Modals, _super);
    function Modals() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        return _this;
    }
    Modals.prototype.onClose = function (e) {
        var _a;
        var element = this.ref.current.lastChild;
        (_a = element.component) === null || _a === void 0 ? void 0 : _a.close('background');
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };
    Modals.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("div", tslib.__assign({ ref: this.ref }, this.props, { onClick: function (e) { return _this.onClose(e); } }), this.props.children));
    };
    return Modals;
}(React.Component));

module.exports = Modals;
