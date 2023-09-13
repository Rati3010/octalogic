import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../@/components/ui/table';

const Students = [
  {
    id: 1,
    RegistrationNo: '2023001',
    FirstName: 'Alice',
    LastName: 'Johnson',
    Course: 3,
    TotalFees: 5000,
    RegistrationDate: '2023-09-15',
  },
  {
    id: 2,
    RegistrationNo: '2023002',
    FirstName: 'Bob',
    LastName: 'Smith',
    Course: 5,
    TotalFees: 6000,
    RegistrationDate: '2023-09-16',
  },
  {
    id: 3,
    RegistrationNo: '2023003',
    FirstName: 'Charlie',
    LastName: 'Brown',
    Course: 4,
    TotalFees: 4500,
    RegistrationDate: '2023-09-17',
  },
  {
    id: 4,
    RegistrationNo: '2023004',
    FirstName: 'David',
    LastName: 'Lee',
    Course: 2,
    TotalFees: 5500,
    RegistrationDate: '2023-09-18',
  },
  {
    id: 5,
    RegistrationNo: '2023005',
    FirstName: 'Eva',
    LastName: 'Martinez',
    Course: 3,
    TotalFees: 7000,
    RegistrationDate: '2023-09-19',
  },
];

const StudentTable = () => {
  return (
    <div>
      <div>
        <h1>BEST STUDENTS</h1>
        <p>View All Students</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right">Reg.No</TableHead>
            <TableHead className="text-right">F.Name</TableHead>
            <TableHead className="text-right">L.Name</TableHead>
            <TableHead className="text-right">Course #</TableHead>
            <TableHead className="w-[100px] text-right">Total Fees</TableHead>
            <TableHead className="text-right">Reg.Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Students.map(student => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">
                {student.RegistrationNo}
              </TableCell>
              <TableCell>{student.FirstName}</TableCell>
              <TableCell>{student.LastName}</TableCell>
              <TableCell className="text-right">{student.Course}</TableCell>
              <TableCell className="font-medium">{student.TotalFees}</TableCell>
              <TableCell>{student.RegistrationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
