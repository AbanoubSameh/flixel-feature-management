"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form/input";
import { SubmitButton } from "@/components/ui/form/submit-button";
import { createFeatureAction } from "@/lib/prisma/data/feature/actions";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export interface CreateFeatureFormProps {
  applicationId: string;
}

export default function CreateFeatureComponent({
  applicationId,
}: CreateFeatureFormProps) {
  const { pending } = useFormStatus();
  const [formState, action] = useFormState(createFeatureAction, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.result && formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col justify-start gap-y-2"
    >
      {pending}
      <input
        id="applicationId"
        type="hidden"
        name="applicationId"
        value={applicationId}
        aria-hidden="true"
        className="border-2"
      />
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col  w-3/12 ">
          <label className="text-gray-700" htmlFor="name">
            Name<span className=" text-red-700">*</span>
          </label>
          <Input
            name="name"
            placeholder="Dashbord toggle"
            type="text"
            required
          />
          <span className="text-xs text-red-400">
            {formState.formErrors?.name?.[0]}
          </span>
        </div>
        <div className="flex flex-col  flex-grow">
          <label className="text-gray-700" htmlFor="description">
            Description
          </label>
          <Input
            className=""
            name="description"
            placeholder="If enabled users get sale statistics page"
            type="text"
          />
          <span className="text-xs text-red-400">
            {formState.formErrors?.description?.[0]}
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-xs text-red-400">{formState.error}</span>
        <SubmitButton
          label="Create Feature Toggle"
          loadingLabel="Creating..."
        />
      </div>
    </form>
  );
}
