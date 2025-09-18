import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Dragger } = Upload;

type Props = {
  onCsvLoaded: (text: string) => void;
};

export default function FileUploader({ onCsvLoaded }: Props) {
  const uploadProps: UploadProps = {
    accept: '.csv,text/csv',
    multiple: false,

    beforeUpload: async (file) => {
      try {
        const text = await file.text();
        onCsvLoaded(text);
        message.success(`${file.name} loaded`);
      } catch {
        message.error('Failed to read file');
      }
      return false;
    },
    showUploadList: { showRemoveIcon: true },
  };

  return (
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag CSV file here</p>
    </Dragger>
  );
}
