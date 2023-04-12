import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
var TagsInputDefaultProps = {
    placeholder: 'Add a tag',
    allowDuplicates: false,
    disabled: false,
    max: -1,
    addOnBlur: false,
    type: 'text',
    autoFocus: false,
    tagValidation: function () { return true; },
    inputProps: {},
    tagProps: {},
    formProps: {},
    hideSubmitButton: false
};
function TagsInput_(props) {
    var _a = React.useState(props.value), tags = _a[0], setTags = _a[1];
    var inputField = React.useRef(null);
    var isDisabled = props.disabled ? true : props.max && props.max > -1 && tags.length >= props.max ? true : false;
    var addTag = function (newTag) {
        if (props.max && props.max > -1 && tags.length >= props.max)
            return;
        if (props.tagValidation && typeof props.tagValidation === 'function') {
            if (!props.tagValidation(newTag))
                return;
        }
        newTag = (props.tagFilter && typeof props.tagFilter === 'function') ? props.tagFilter(newTag) : newTag;
        if (props.allowDuplicates) {
            setTags(function (oldTags) { return __spreadArray(__spreadArray([], oldTags, true), [newTag], false); });
        }
        else {
            if (!tags.includes(newTag))
                setTags(function (oldTags) { return __spreadArray(__spreadArray([], oldTags, true), [newTag], false); });
        }
    };
    var removeTag = function (arrayIndex) {
        var updatedTags = __spreadArray([], tags, true);
        updatedTags.splice(arrayIndex, 1);
        setTags(updatedTags);
    };
    var handleInputKeyDown = function (e) {
        if (props.addOnBlur && inputField.current && inputField.current.value && e.key === 'Tab') {
            var newTag = inputField.current.value;
            addTag(newTag);
            inputField.current.value = "";
            e.preventDefault();
        }
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (inputField.current) {
            var newTag = inputField.current.value;
            addTag(newTag);
            inputField.current.value = "";
        }
    };
    React.useEffect(function () {
        if (props.onChange)
            props.onChange(tags);
    }, [tags]);
    return (_jsx("div", __assign({ className: "tags-input tags-input-".concat(props.name, " ").concat(!props.hideSubmitButton && 'with-submit-button') }, { children: _jsxs("div", __assign({ className: 'tags-container' }, { children: [tags && tags.length > 0 &&
                    tags.map(function (tag, i) {
                        return _jsxs("div", __assign({ className: 'tag', tabIndex: 0, "data-key": i, "data-value": tag }, props.tagProps, { children: [props.prepend && props.prepend, tag, _jsx("button", __assign({ className: 'remove-tag', title: 'Remove', onClick: function () { return removeTag(i); } }, { children: _jsx("svg", __assign({ className: 'close-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 96 960 960", height: "14" }, { children: _jsx("path", { d: "m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z", fill: 'currentColor' }) })) }))] }), i);
                    }), _jsxs("form", __assign({ name: "tags-input-".concat(props.name, "-form"), className: 'tags-input-form', onSubmit: function (e) { return handleSubmit(e); } }, props.formProps, { children: [_jsx("input", __assign({ autoFocus: props.autoFocus, type: props.type, onKeyDown: handleInputKeyDown, name: props.name, className: 'input-field', ref: inputField, placeholder: props.placeholder, required: true, disabled: isDisabled }, props.inputProps)), !props.hideSubmitButton &&
                            _jsx("button", __assign({ type: 'submit', className: 'submit-button' }, { children: _jsx("svg", __assign({ className: 'submit-icon', xmlns: "http://www.w3.org/2000/svg", height: "16", viewBox: "0 96 960 960" }, { children: _jsx("path", { d: "M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z", fill: 'currentColor' }) })) }))] }))] })) })));
}
TagsInput_.displayName = 'TagsInput';
TagsInput_.defaultProps = TagsInputDefaultProps;
export var TagsInput = React.memo(TagsInput_);
//# sourceMappingURL=TagsInput.js.map