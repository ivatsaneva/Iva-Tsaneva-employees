import { Card, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { MatchingRow } from '@/types/employeesTypes';

type Props = {
  data: MatchingRow[];
};

const columns: ColumnsType<MatchingRow> = [
  { title: 'Employee 1', dataIndex: 'firstEmployee' },
  { title: 'Employee 2', dataIndex: 'secondEmployee' },
  { title: 'Project Id', dataIndex: 'projectId' },
  {
    title: 'Days worked together',
    dataIndex: 'daysWorkedTogether',
    sorter: (a, b) => a.daysWorkedTogether - b.daysWorkedTogether,
    defaultSortOrder: 'descend',
  },
];

export default function EmployeesTable({ data }: Props) {
  return (
    <Card>
      <Table
        rowKey={(row) =>
          `${row.firstEmployee}-${row.secondEmployee}-${row.projectId}`
        }
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        size="middle"
      />
    </Card>
  );
}
