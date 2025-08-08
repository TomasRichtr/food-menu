'use client';

import {useFormStatus} from "react-dom";

interface SubmitFormBtnProps {
  submitLabel?: string;
}

const SubmitFormBtn = ({
  submitLabel = 'Submit'
}) => {
  const {
    pending
  } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
    >
      {pending ? 'Submitting...' : submitLabel}
    </button>
  );
};

export default SubmitFormBtn;
