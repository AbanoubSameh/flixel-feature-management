import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import { ContactDataService } from "@/lib/prisma/data/contact/contact-data.service";
import { FeatureFlagDataService } from "@/lib/prisma/data/feature/feature-data.service";
import Link from "next/link";

export default async function AdminPage() {
  const activeApplication =
    await UserApplicationDataService.instance.getActiveApplication();
  if (!activeApplication?.id) {
    return "...loading";
  }
  const features = await FeatureFlagDataService.getItems(activeApplication?.id);
  const contacts = await ContactDataService.getItems(activeApplication?.id);
  return (
    <>
      <h1 className=" text-gray-600 font-bold text-xl mb-2">Dashboard</h1>
      <section className="grid gap-6 md:grid-cols-3 p-4 md:p-8 mx-auto w-full">
        <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Flex Features
            </dt>

            <dd className="text-5xl font-light md:text-6xl dark:text-white">
              {features.length}
            </dd>

            <dd className="flex items-left space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <Link
                className="underline"
                href={`/${activeApplication.id}/features`}
              >
                View Features
              </Link>
            </dd>
          </dl>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl dark:bg-gray-900">
          <dl className="space-y-2">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Contacts
            </dt>

            <dd className="text-5xl font-light md:text-6xl dark:text-white">
              {contacts.length}
            </dd>

            <dd className="flex items-left space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <Link
                className="underline"
                href={`/${activeApplication.id}/contacts`}
              >
                View Contacts
              </Link>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
}
