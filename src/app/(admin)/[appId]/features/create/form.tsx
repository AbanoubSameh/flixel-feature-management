import { Button } from "@/components/ui/button";
import { getCreateFeatureAction } from "./actions";
import { Input } from "@/components/ui/input";

export interface CreateFeatureFormProps {
  applicationId: string;
}

export default function CreateFeatureComponent({
  applicationId,
}: CreateFeatureFormProps) {
  return (
    <form
      action={getCreateFeatureAction}
      className="flex flex-col justify-start gap-y-2"
    >
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
          <label htmlFor="name">Name</label>
          <Input name="name" type="text" />
        </div>
        <div className="flex flex-col  flex-grow ">
          <label htmlFor="name">Description</label>
          <Input name="description" type="text" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
