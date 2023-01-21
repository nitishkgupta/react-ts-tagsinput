import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './TagsInput.css';
var TagsInputDefaultProps = {
    placeholder: 'Add new tag',
    value: [],
    allowDuplicates: false,
    disabled: false
};
export function TagsInput(props) {
    var _a = React.useState(props.value), tags = _a[0], setTags = _a[1];
    var inputBox = React.useRef(null);
    var addTag = function (newTag) {
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
        if (inputBox.current) {
            var newTag = inputBox.current.value;
            addTag(newTag);
            inputBox.current.value = "";
        }
    };
    React.useEffect(function () {
        if (props.onChange)
            props.onChange(tags);
    }, [tags]);
    return (_jsxs("div", __assign({ className: "tags-input tags-input-".concat(props.name) }, { children: [_jsx("form", __assign({ onSubmit: function (e) { return handleSubmit(e); } }, { children: _jsx("input", { type: 'text', name: props.name, className: 'input-box', ref: inputBox, placeholder: props.placeholder, required: true, disabled: props.disabled }) })), _jsx("div", __assign({ className: 'tags' }, { children: tags && tags.length > 0 ?
                    tags.map(function (tag, i) {
                        return _jsxs("div", __assign({ className: 'tag' }, { children: [props.prepend && props.prepend, tag, _jsx("span", __assign({ className: 'remove-tag', title: 'Remove', onClick: function () { return removeTag(i); } }, { children: "x" }))] }), i);
                    })
                    : _jsx("span", __assign({ style: { color: 'transparent' } }, { children: "-" })) }))] })));
}
TagsInput.defaultProps = TagsInputDefaultProps;
//# sourceMappingURL=TagsInput.js.map