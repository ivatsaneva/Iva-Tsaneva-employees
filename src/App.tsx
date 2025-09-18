import { Typography, Space, Card, Table } from 'antd';
import FileUploader from './components/FileUploader';
import { useEmployeesMatch } from './hooks/useEmployeesMatch';
import EmployeesTable from './components/EmployeesTable';
import {
  AppContainer,
  Signature,
  TitleStyled,
  VerticalSpace,
} from './styles/App.styles';

const { Text } = Typography;

function App() {
  const { setCsvFile, matchingRows, topPairs } = useEmployeesMatch();

  return (
    <AppContainer>
      <TitleStyled level={1}>
        Find the pair of employees
        <br /> who have worked together
      </TitleStyled>

      <Signature>Task done by Iva Tsaneva</Signature>

      <FileUploader onCsvLoaded={setCsvFile} />

      <VerticalSpace direction="vertical" size="middle">
        <Card>
          {topPairs.length ? (
            <Space wrap>
              {topPairs.map((p) => (
                <div key={p.key} className="ant-tag ant-tag-blue">
                  <Text>IDs of employees who have worked together: </Text>
                  <b>{p.key}</b>
                  <div>
                    Worked <b>{p.total}</b> days together
                  </div>
                </div>
              ))}
            </Space>
          ) : (
            <Text type="secondary">
              No employee pairs found yet. Upload a CSV file to discover who has
              worked together.
            </Text>
          )}
        </Card>

        <EmployeesTable data={matchingRows} />
      </VerticalSpace>
    </AppContainer>
  );
}

export default App;
