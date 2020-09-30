import React from 'react';

import useLogic from './logic';

export default function Form({
  noValidate = true,
  action,
  schema,
  context,
  children
}) {
  const { onSubmit, childrenProps } = useLogic(
    action,
    schema,
    context
  );

  return (
    <form
      noValidate={noValidate}
      onSubmit={onSubmit}
    >
      {children(childrenProps)}
    </form>
  );
}
