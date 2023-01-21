import React from 'react';
import './TagsInput.css';

export type Tag = string | number;

export interface TagsInputProps {
    name: string,
    placeholder?: string,
    value?: Array<Tag>,
    allowDuplicates?: boolean,
    disabled?: boolean,
    prepend?: string | number,
    onChange?: (newTags: Array<Tag>) => void
}

const TagsInputDefaultProps = {
    placeholder: 'Add new tag',
    value: [],
    allowDuplicates: false,
    disabled: false
}

export function TagsInput(props: TagsInputProps) {

    const [tags, setTags] = React.useState<Array<Tag>>(props.value!);
    const inputBox = React.useRef<HTMLInputElement>(null);

    const addTag = (newTag: Tag) => {
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
        
        if( inputBox.current ) {
            let newTag: Tag = inputBox.current.value;
            addTag(newTag);
            inputBox.current.value = "";
        }
 
    }

    React.useEffect(() => {
        if( props.onChange ) props.onChange(tags);
    }, [tags]);

    return(
        <div className={`tags-input tags-input-${props.name}`}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name={props.name} className='input-box' ref={inputBox} placeholder={props.placeholder} required disabled={props.disabled} />
            </form>
            <div className='tags'>
                {
                    tags && tags.length > 0 ?
                        tags.map((tag, i) =>
                            <div className='tag' key={i}>
                                {props.prepend && props.prepend}{tag}
                                <span className='remove-tag' title='Remove' onClick={() => removeTag(i)}>x</span>
                            </div>
                        )
                    : <span style={{ color: 'transparent' }}>-</span>
                }
            </div>
        </div>
    )

}

TagsInput.defaultProps = TagsInputDefaultProps;