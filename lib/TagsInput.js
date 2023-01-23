import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
var TagsInputDefaultProps = {
    placeholder: 'Add new tag',
    value: [],
    allowDuplicates: false,
    disabled: false,
    max: -1
};
export function TagsInput(props) {
    var _a = React.useState(props.value), tags = _a[0], setTags = _a[1];
    var inputField = React.useRef(null);
    var isDisabled = props.disabled ? true : props.max && props.max > -1 && tags.length >= props.max ? true : false;
    var addTag = function (newTag) {
        if (props.max && props.max > -1 && tags.length >= props.max)
            return;
        if (props.allowDuplicates) {
            setTags(function (oldTags) { return __spreadArray(__spreadArray([], oldTags, true), [newTag], false); });
        }
        else {
            if (!tags.includes(newTag))
                setTags(function (oldTags) { return __spreadArray(__spreadArray([], oldTags, true), [newTag], false); });
        }
    };
    var removeTag = function (arrayIndex) {
        var newTags = __spreadArray([], tags, true);
        newTags.splice(arrayIndex, 1);
        setTags(newTags);
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
    return (_jsxs("div", __assign({ className: "tags-input tags-input-".concat(props.name) }, { children: [_jsx("form", __assign({ className: 'tags-input-form', onSubmit: function (e) { return handleSubmit(e); } }, { children: _jsx("input", { type: 'text', name: props.name, className: 'input-field', ref: inputField, placeholder: props.placeholder, required: true, disabled: isDisabled }) })), _jsx("div", __assign({ className: 'tags-container' }, { children: tags && tags.length > 0 ?
                    tags.map(function (tag, i) {
                        return _jsxs("div", __assign({ className: 'tag' }, { children: [props.prepend && props.prepend, tag, _jsx("span", __assign({ className: 'remove-tag', title: 'Remove', onClick: function () { return removeTag(i); } }, { children: "x" }))] }), i);
                    })
                    : _jsx("span", __assign({ className: 'no-tags', style: { color: 'transparent' } }, { children: "-" })) }))] })));
}
TagsInput.defaultProps = TagsInputDefaultProps;
//# sourceMappingURL=TagsInput.js.map