/// <reference types="react" />
import './TagsInput.css';
export type Tag = string | number;
export interface TagsInputProps {
    name: string;
    placeholder?: string;
    value?: Array<Tag>;
    allowDuplicates?: boolean;
    disabled?: boolean;
    prepend?: string | number;
    onChange?: (newTags: Array<Tag>) => void;
}
export declare function TagsInput(props: TagsInputProps): JSX.Element;
export declare namespace TagsInput {
    var defaultProps: {
        placeholder: string;
        value: never[];
        allowDuplicates: boolean;
        disabled: boolean;
    };
}
