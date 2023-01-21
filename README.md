# react-ts-tagsinput
A simple React tags input component built on TypeScript.

![Screenshot](https://github.com/nitishkgupta/react-ts-tagsinput/raw/master/example/screenshot.png)

## Component Props Documentation

| Prop            	| Type                              	| Description                                                                       	| Required 	| Default     	|
|-----------------	|-----------------------------------	|-----------------------------------------------------------------------------------	|----------	|-------------	|
| name            	| string                            	| The name attribute of the input field.                                            	| Yes      	| -           	|
| placeholder     	| string                            	| The placeholder attribute of the input field.                                     	| No       	| Add new tag 	|
| value           	| Array<Tag>                        	| The array of tags.                                                                	| No       	| []          	|
| allowDuplicates 	| boolean                           	| Whether to allow duplicate tags or not.                                           	| No       	| false       	|
| disabled        	| boolean                           	| The disabled attribute of the input field.                                        	| No       	| false       	|
| prepend         	| string \| number                  	| Text to prepend before each tag. Example: '#'.                                    	| No       	| -           	|
| onChange        	| Function (newTags: Array) => void 	| The callback function that triggers whenever there is a change in the tags array. 	| No       	| -           	|
