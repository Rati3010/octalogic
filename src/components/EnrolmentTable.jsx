import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../@/components/ui/table';

const Enroll = [
  {
    id: 1,
    EnrollmentNo: '2023001',
    StudentName: 'Alice Johnson',
    CourseName: 'Web Development',
    Fees: 5000,
    EnrollmentDate: '2023-09-15',
  },
  {
    id: 2,
    EnrollmentNo: '2023002',
    StudentName: 'Bob Smith',
    CourseName: 'Data Science',
    Fees: 6000,
    EnrollmentDate: '2023-09-16',
  },
  {
    id: 3,
    EnrollmentNo: '2023003',
    StudentName: 'Charlie Brown',
    CourseName: 'Graphic Design',
    Fees: 4500,
    EnrollmentDate: '2023-09-17',
  },
  {
    id: 4,
    EnrollmentNo: '2023004',
    StudentName: 'David Lee',
    CourseName: 'Mobile App Development',
    Fees: 5500,
    EnrollmentDate: '2023-09-18',
  },
  {
    id: 5,
    EnrollmentNo: '2023005',
    StudentName: 'Eva Martinez',
    CourseName: 'Machine Learning',
    Fees: 7000,
    EnrollmentDate: '2023-09-19',
  },
];

const EnrollmentTable = () => {
  return (
    <div>
      <h1>Latest Enrollments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right">Enr.No</TableHead>
            <TableHead className="text-right">S.Name</TableHead>
            <TableHead className="text-right">C.Name</TableHead>
            <TableHead className="text-right">Fees</TableHead>
            <TableHead className="w-[100px] text-right">Enr.Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Enroll.map(enroll => (
            <TableRow key={enroll.id}>
              <TableCell className="font-medium">
                {enroll.EnrollmentNo}
              </TableCell>
              <TableCell>{enroll.StudentName}</TableCell>
              <TableCell>{enroll.CourseName}</TableCell>
              <TableCell className="text-right">{enroll.Fees}</TableCell>
              <TableCell className="font-medium">
                {enroll.EnrollmentDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnrollmentTable;
