import React from 'react';
export type Tag = string | number;
export interface TagsInputProps {
    name: string;
    value: Array<Tag>;
    placeholder?: string;
    allowDuplicates?: boolean;
    disabled?: boolean;
    prepend?: string;
    max?: number;
    addOnBlur?: boolean;
    type?: React.HTMLInputTypeAttribute;
    autoFocus?: boolean;
    inputProps?: {
        [key: string]: unknown;
    };
    tagProps?: {
        [key: string]: unknown;
    };
    formProps?: {
        [key: string]: unknown;
    };
    hideSubmitButton?: boolean;
    onChange?: (tags: Array<Tag>) => void;
    tagValidation?: (tag: Tag) => boolean;
    tagFilter?: (tag: Tag) => Tag;
}
declare function TagsInput_(props: TagsInputProps): import("react/jsx-runtime").JSX.Element;
declare namespace TagsInput_ {
    var displayName: string;
    var defaultProps: {
        placeholder: string;
        allowDuplicates: boolean;
        disabled: boolean;
        max: number;
        addOnBlur: boolean;
        type: string;
        autoFocus: boolean;
        tagValidation: () => boolean;
        inputProps: {};
        tagProps: {};
        formProps: {};
        hideSubmitButton: boolean;
    };
}
export declare const TagsInput: React.MemoExoticComponent<typeof TagsInput_>;
export {};
