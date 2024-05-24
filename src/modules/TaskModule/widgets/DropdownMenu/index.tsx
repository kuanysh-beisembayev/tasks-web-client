import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useParams } from "wouter";
import TaskApiService from "../../services/api";
import { useRecoilValue } from "recoil";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";
import { useBrowserLocation } from "wouter/use-browser-location";
import { useState } from "react";

const DropdownMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const auth = useRecoilValue(authState) as Auth;
  const [, setLocation] = useBrowserLocation();

  const handleDelete = () => {
    setIsLoading(true);

    TaskApiService.deleteTask(auth.accessToken, params.taskId as string)
      .then(() => {
        setLocation("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-sm btn-ghost mb-1"
      >
        <EllipsisHorizontalIcon className="size-5" />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-10 p-2 shadow bg-white rounded-2xl"
      >
        <button
          className="btn btn-sm btn-ghost flex flex-nowrap text-red-500"
          onClick={handleDelete}
        >
          {isLoading ? (
            <span className="size-4 loading loading-spinner" />
          ) : (
            <TrashIcon className="size-4" />
          )}
          <span className="text-nowrap">Delete Task</span>
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
