# react-ts-tagsinput
A simple and customizable React tags input component written in TypeScript.

![Screenshot](https://github.com/nitishkgupta/react-ts-tagsinput/raw/master/example/screenshot.png)

[![Live Demo](https://raw.githubusercontent.com/nitishkgupta/react-ts-tagsinput/master/example/live-demo.png)](https://codesandbox.io/s/react-ts-tagsinput-demo-4bctpm)


## Installation
Install the component using npm package manager:

```npm i react-ts-tagsinput```

## Example
```typescript
import React from "react";
import type { Tag } from 'react-ts-tagsinput';
import { TagsInput } from "react-ts-tagsinput";
// Import default styling (optional)
import 'react-ts-tagsinput/lib/defaultTheme.css';

export default function App() {

  const [tags, setTags] = React.useState<Array<Tag>>(["Tag 1", "Tag 2", "Tag 3", "Tag 4"]);

  const handleTagsChange = React.useCallback((updatedTags: Array<Tag>) => {
    setTags(updatedTags);
  }, []);
  
  return(
    <div className='app'>
      <TagsInput name="myTags" placeholder="Add a tag" value={tags} onChange={handleTagsChange} />
    </div>
  );
  
}
```

## Documentation

### Props

| Prop             | Type                                       | Description                                                                                                                                                                                           | Required | Default    |
|------------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|------------|
| name             | string                                     | The name attribute of the input field.                                                                                                                                                                | Yes      | -          |
| type             | string                                     | The type of the input field.                                                                                                                                                         | No       | text       |
| placeholder      | string                                     | The placeholder of the input field.                                                                                                                                                                   | No       | Add a tag  |
| value            | Array\<Tag>                                | The array of tags.                                                                                                                                                                                    | Yes      | -          |
| allowDuplicates  | boolean                                    | Whether to allow duplicate tags or not.                                                                                                                                                               | No       | false      |
| disabled         | boolean                                    | Whether the input field is disabled or not.                                                                                                                                                           | No       | false      |
| prepend          | string                                     | Text to prepend before each tag. Example: #.                                                                                                                                                          | No       | -          |
| max              | number                                     | Limit the maximum number of tags. Set `-1` for no limit.                                                                                                                                              | No       | -1         |
| addOnBlur        | boolean                                    | Whether to add the tag when the user presses tab on the input.                                                                                                                                        | No       | false      |
| autoFocus        | boolean                                    | Whether to autofocus the inputfield on component mount.                                                                                                                                               | No       | false      |
| hideSubmitButton | boolean                                    | Whether to hide the submit button.                                                                                                                                                                    | No       | false      |
| onChange         | Function<br>(newTags: Array\<Tag>) => void | The callback function that is called whenever there is a change in the tags array.                                                                                                                    | No       | -          |
| inputProps       | Object<br>{[key: string]: unknown}         | Use this prop to add extra attributes to the input field.                                                                                                                                             | No       | -          |
| tagProps         | Object<br>{[key: string]: unknown}         | Use this prop to add extra attributes to the 'tag' div.                                                                                                                                               | No       | -          |
| formProps        | Object<br>{[key: string]: unknown}         | Use this prop to add extra attributes to the form.                                                                                                                                                    | No       | -          |
| tagValidation    | Function<br>(tag: Tag) => boolean          | The validation function to run after each form submit. Return false to prevent adding the tag. You can add any type of validation including regex. Simply pass your validation function to this prop. | No       | () => true |
| tagFilter        | Function<br>(tag: Tag) => Tag              | The filter function that lets you modify the tag just before it is added. For example, you can use this to remove all the whitespaces from the tag.                                                   | No       | -          |

## Changelog
[https://github.com/nitishkgupta/react-ts-tagsinput/blob/master/CHANGELOG.md](https://github.com/nitishkgupta/react-ts-tagsinput/blob/master/CHANGELOG.md)

## Contributions
Open to feedback and contributions at [nitishkgupta/react-ts-tagsinput](https://github.com/nitishkgupta/react-ts-tagsinput).