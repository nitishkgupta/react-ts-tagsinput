import React from "react";
import type { Tag } from 'react-ts-tagsinput';
import { TagsInput } from "react-ts-tagsinput";

function App() {

  const [tags, setTags] = React.useState<Array<Tag>>(["Tag 1", "Tag 2", "Tag 3", "Tag 4"]);
  
  return(
    <div className='app'>
      <TagsInput name="tags" placeholder="Add new tag" value={tags} onChange={(newTags) => setTags(newTags)} />
    </div>
  );
  
}