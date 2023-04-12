import React from 'react';

export type Tag = string | number;

export interface TagsInputProps {
  name: string,
  value: Array<Tag>,
  placeholder?: string,
  allowDuplicates?: boolean,
  disabled?: boolean,
  prepend?: string,
  max?: number,
  addOnBlur?: boolean,
  type?: React.HTMLInputTypeAttribute,
  autoFocus?: boolean,
  inputProps?: {[key: string]: unknown},
  tagProps?: {[key: string]: unknown},
  formProps?: {[key: string]: unknown},
  hideSubmitButton?: boolean,
  onChange?: (tags: Array<Tag>) => void,
  tagValidation?: (tag: Tag) => boolean,
  tagFilter?: (tag: Tag) => Tag
}

const TagsInputDefaultProps = {
  placeholder: 'Add a tag',
  allowDuplicates: false,
  disabled: false,
  max: -1,
  addOnBlur: false,
  type: 'text',
  autoFocus: false,
  tagValidation: () => true,
  inputProps: {},
  tagProps: {},
  formProps: {},
  hideSubmitButton: false
}

function TagsInput_(props: TagsInputProps) {

  const [tags, setTags] = React.useState<Array<Tag>>(props.value);
  const inputField = React.useRef<HTMLInputElement>(null);
  const isDisabled: boolean = props.disabled ? true : props.max && props.max > -1 && tags.length >= props.max ? true : false;

  const addTag = (newTag: Tag) => {
    if (props.max && props.max > -1 && tags.length >= props.max) return;
    if (props.tagValidation && typeof props.tagValidation === 'function') {
      if (!props.tagValidation(newTag)) return;
    }
    newTag = (props.tagFilter && typeof props.tagFilter === 'function') ? props.tagFilter(newTag) : newTag;
    if (props.allowDuplicates) {
      setTags((oldTags) => [...oldTags, newTag]);
    } else {
      if (!tags.includes(newTag)) setTags((oldTags) => [...oldTags, newTag]);
    }
  }

  const removeTag = (arrayIndex: number) => {
    const updatedTags: Array<Tag> = [...tags];
    updatedTags.splice(arrayIndex, 1);
    setTags(updatedTags);
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.addOnBlur && inputField.current && inputField.current.value && e.key === 'Tab') {
      const newTag: Tag = inputField.current.value;
      addTag(newTag);
      inputField.current.value = "";
      e.preventDefault();
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputField.current) {
      const newTag: Tag = inputField.current.value;
      addTag(newTag);
      inputField.current.value = "";
    }
  }

  React.useEffect(() => {
    if (props.onChange) props.onChange(tags);
  }, [tags]);

  return (
    <div className={`tags-input tags-input-${props.name} ${!props.hideSubmitButton && 'with-submit-button'}`}>
      <div className='tags-container'>
        {
          tags && tags.length > 0 &&
          tags.map((tag, i) =>
          <div className='tag' key={i} tabIndex={0} data-key={i} data-value={tag} {...props.tagProps}>
            {props.prepend && props.prepend}{tag}
            <button className='remove-tag' title='Remove' onClick={() => removeTag(i)}>
              <svg className='close-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" height="14"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" fill='currentColor' /></svg>
            </button>
          </div>
          )
        }
        <form name={`tags-input-${props.name}-form`} className='tags-input-form' onSubmit={(e) => handleSubmit(e)} {...props.formProps}>
          <input autoFocus={props.autoFocus} type={props.type} onKeyDown={handleInputKeyDown} name={props.name} className='input-field' ref={inputField} placeholder={props.placeholder} required disabled={isDisabled} {...props.inputProps} />
          {
            !props.hideSubmitButton &&
            <button type='submit' className='submit-button' >
              <svg className='submit-icon' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 96 960 960"><path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z" fill='currentColor' /></svg>
            </button>
          }
        </form>
      </div>
    </div>
  )

}

TagsInput_.displayName = 'TagsInput';
TagsInput_.defaultProps = TagsInputDefaultProps;

export const TagsInput = React.memo(TagsInput_);