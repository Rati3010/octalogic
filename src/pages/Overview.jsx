import React, { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import OverViewCard from '../components/OverViewCard';
import EnrollmentTable from '../components/EnrolmentTable';
import StudentTable from '../components/StudentTable';
import Sidebar from "../components/Sidebar";

const Overview = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Adminstrator - Courses" to the project
  }, []);

  return (
    <>
      <div>
        <Sidebar />
        <div className="float-right w-[93vw]">
          <OverViewCard />
          <EnrollmentTable />
          <StudentTable />
        </div>
      </div>
    </>
  );
};

export default Overview;
