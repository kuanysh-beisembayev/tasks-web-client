import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";
import CompletedTaskList from "../../widgets/CompletedTaskList";

const CompletedTaskListPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper>
        <Heading>Completed</Heading>
      </HorizontalWrapper>
      <div className="grow space-y-4 overflow-y-auto pb-4">
        <CompletedTaskList />
      </div>
    </div>
  );
};

export default CompletedTaskListPage;
