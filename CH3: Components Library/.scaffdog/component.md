---
name: 'component'
root: 'src'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import React from 'react';
import styles from './{{inputs.name | pascal}}.module.css'

type Props = {
  children: React.ReactNode;
}

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => (
  <div>{children}</div>
);
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const Template: ComponentStory<typeof {{ inputs.name | pascal }}> = (args) => <{{ inputs.name | pascal }} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css
.{{ inputs.name }} {}
```