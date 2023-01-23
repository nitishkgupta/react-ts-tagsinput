import React from 'react';

export type Tag = string | number;

export interface TagsInputProps {
    name: string,
    placeholder?: string,
    value?: Array<Tag>,
    allowDuplicates?: boolean,
    disabled?: boolean,
    prepend?: string | number,
    onChange?: (tags: Array<Tag>) => void,
    max?: number,
}

const TagsInputDefaultProps = {
    placeholder: 'Add new tag',
    value: [],
    allowDuplicates: false,
    disabled: false,
    max: -1
}

export function TagsInput(props: TagsInputProps) {

    const [tags, setTags] = React.useState<Array<Tag>>(props.value!);
    const inputField = React.useRef<HTMLInputElement>(null);
    const isDisabled: boolean = props.disabled ? true : props.max && props.max > -1 && tags.length >= props.max ? true : false;

    const addTag = (newTag: Tag) => {
        if( props.max && props.max > -1 && tags.length >= props.max ) return;
        if( props.allowDuplicates ) {
            setTags((oldTags) => [...oldTags, newTag]);
        } else {
            if ( ! tags.includes(newTag) ) setTags((oldTags) => [...oldTags, newTag]);
        }
    }

    const removeTag = (arrayIndex: number) => {
        let newTags: Array<Tag> = [...tags];
        newTags.splice(arrayIndex, 1);
        setTags(newTags);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if( inputField.current ) {
            let newTag: Tag = inputField.current.value;
            addTag(newTag);
            inputField.current.value = "";
        }
    }

    React.useEffect(() => {
        if( props.onChange ) props.onChange(tags);
    }, [tags]);

    return(
        <div className={`tags-input tags-input-${props.name}`}>
            <form className='tags-input-form' onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name={props.name} className='input-field' ref={inputField} placeholder={props.placeholder} required disabled={isDisabled} />
            </form>
            <div className='tags-container'>
                {
                    tags && tags.length > 0 ?
                        tags.map((tag, i) =>
                            <div className='tag' key={i}>
                                {props.prepend && props.prepend}{tag}
                                <span className='remove-tag' title='Remove' onClick={() => removeTag(i)}>x</span>
                            </div>
                        )
                    : <span className='no-tags' style={{ color: 'transparent' }}>-</span>
                }
            </div>
        </div>
    )

}

TagsInput.defaultProps = TagsInputDefaultProps;