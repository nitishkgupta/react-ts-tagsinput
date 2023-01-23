/// <reference types="react" />
export type Tag = string | number;
export interface TagsInputProps {
    name: string;
    placeholder?: string;
    value?: Array<Tag>;
    allowDuplicates?: boolean;
    disabled?: boolean;
    prepend?: string | number;
    onChange?: (tags: Array<Tag>) => void;
    max?: number;
}
export declare function TagsInput(props: TagsInputProps): JSX.Element;
export declare namespace TagsInput {
    var defaultProps: {
        placeholder: string;
        value: never[];
        allowDuplicates: boolean;
        disabled: boolean;
        max: number;
    };
}
