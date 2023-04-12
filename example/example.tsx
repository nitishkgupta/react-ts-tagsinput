import React from "react";
import type { Tag } from 'react-ts-tagsinput';
import { TagsInput } from "react-ts-tagsinput";
// Import default styling (optional)
import 'react-ts-tagsinput/lib/defaultTheme.css';

export default function App() {

  const [tags, setTags] = React.useState<Array<Tag>>(["Tag 1", "Tag 2", "Tag 3", "Tag 4"]);

  const handleTagsChange = React.useCallback((updatedTags: Array<Tag>) => {
    setTags(updatedTags);
  }, [tags]);
  
  return(
    <div className='app'>
      <TagsInput name="myTags" placeholder="Add a tag" value={tags} onChange={handleTagsChange} />
    </div>
  );
  
}