import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";
import CompletedTaskList from "../../widgets/CompletedTaskList";

const CompletedTaskListPage = () => {
  return (
    <div className="grow flex flex-col pb-4">
      <HorizontalWrapper>
        <Heading>Completed</Heading>
      </HorizontalWrapper>
      <div className="grow overflow-y-auto">
        <CompletedTaskList />
      </div>
    </div>
  );
};

export default CompletedTaskListPage;
