'use client';
import {useActionState} from "react";

import classes from "@/app/meals/share/page.module.css";
import ImagePicker from "@/components/shared/forms/imagePicker";
import SubmitFormBtn from "@/components/shared/forms/SubmitFormBtn";
import {shareMeal} from "@/lib/action";

const MealForm = () => {
  const [state, formAction] = useActionState(shareMeal, {
    message: '',
    data: {
      title: '',
      summary: '',
      instructions: '',
      creator: '',
      creator_email: ''
    }
  });

  return (
    <form
      className={classes.form}
      action={formAction}
    >
      <div
        className={classes.row}
      >
        <p>
          <label
            htmlFor="name"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={state.data?.creator || ''}
            required
          />
        </p>
        <p>
          <label
            htmlFor="email"
          >Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={state.data?.creator_email || ''}
            required
          />
        </p>
      </div>
      <p>
        <label
          htmlFor="title"
        >Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={state.data?.title || ''}
          required
        />
      </p>
      <p>
        <label
          htmlFor="summary"
        >Short Summary</label>
        <input
          type="text"
          id="summary"
          name="summary"
          defaultValue={state.data?.summary || ''}
          required
        />
      </p>
      <p>
        <label
          htmlFor="instructions"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          rows={10}
          defaultValue={state.data?.instructions || ''}
          required
        />
      </p>
      <ImagePicker
        label="Image"
        name="image"
      />
      {state.message && (
        <p
          className="text-red-500"
        >
          {state.message}
        </p>
      )}
      <p
        className={classes.actions}
      >
        <SubmitFormBtn
          submitLabel="Share Meal"
        />
      </p>
    </form>
  );
};

export default MealForm;
