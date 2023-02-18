import {MdImage} from 'react-icons/md'
export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Alt Text cannot be empty').required(),
      option: {
        isHighlighted: true,
      },
    },
  ],
}
