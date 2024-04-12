import { FeatureFlagService } from "@/lib/prisma/data/feature-flags/feature-flags.data.service";

const featureFlagService = FeatureFlagService.getInstance<FeatureFlagService>();

export default async function FeatureFlagListPage() {
  //    await featureFlagService.createFeatureFlag({ name: 'hello world' })
  console.log(await featureFlagService.getFeatureFlags());
  return (
    <div className="flex flex-col">
      <div className=" flex justify-end mb-3">
        <button>Create Feature flag</button>
      </div>

      {/* <table className="flex-grow p-3">

            flag list
        </table> */}
    </div>
  );
}
