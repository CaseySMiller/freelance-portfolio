import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen footer-v-spacer">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        <Spinner size="xl" color="purple" /> <span>Loading</span>
        <Spinner size="xs" className="spinner-period" color="purple" />
        <Spinner size="xs" className="spinner-period" color="purple" />
        <Spinner size="xs" className="spinner-period" color="purple" />
      </h1>
    </div>
  );
}
