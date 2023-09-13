import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../@/components/ui/table';

const CourseListTable = () => {
  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="text-gray-500 mt-4 text-lg font-normal tracking-wide w-40">
          COURSE LIST
        </h1>
        <div className="relative w-[30%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-right">Name</TableHead>
            <TableHead className="text-right">description</TableHead>
            <TableHead className="text-right">instructor</TableHead>
            <TableHead className="text-right">instrument</TableHead>
            <TableHead className="w-[100px] text-right">Day of Week</TableHead>
            <TableHead className="text-right"># of students</TableHead>
            <TableHead className="text-right">price</TableHead>
            <TableHead className="text-right">status</TableHead>
            <TableHead className="text-right">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Courses.map(course => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">
                {course.Name.length >= 10
                  ? `${course.Name.substring(0, 10)}...`
                  : course.Name}
              </TableCell>
              <TableCell>
                {course.Description.length >= 20
                  ? `${course.Description.substring(0, 20)}...`
                  : course.Description}
              </TableCell>
              <TableCell>{course.Instructor}</TableCell>
              <TableCell className="text-right">{course.Instrument}</TableCell>
              <TableCell className="font-medium">{course.DayOfWeek}</TableCell>
              <TableCell>{course.NumberOfStudents}</TableCell>
              <TableCell>{course.Price}</TableCell>
              <TableCell className="text-right">{course.Status}</TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CourseListTable;
