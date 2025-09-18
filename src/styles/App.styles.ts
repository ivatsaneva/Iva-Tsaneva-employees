import styled from 'styled-components';
import { Typography, Space } from 'antd';

export const AppContainer = styled.div`
  max-width: 960px;
  margin: 32px auto;
  padding: 16px;
`;

export const TitleStyled = styled(Typography.Title)`
  color: #2a2859 !important;
  text-align: center;
  margin: 0 !important;
  line-height: 1.3;
`;

export const Signature = styled(Typography.Paragraph)`
  margin-top: 16px !important;
  font-style: italic;
  color: #888 !important;
  text-align: center;
`;

export const VerticalSpace = styled(Space)`
  width: 100%;
  margin-top: 24px;
`;
