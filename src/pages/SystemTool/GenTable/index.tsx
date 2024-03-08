import ColumnTable from '@/pages/SystemTool/GenTable/components/ColumnTable';
import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Tabs } from 'antd';
import React from 'react';

const { TabPane } = Tabs;

const TabList: React.FC<unknown> = () => {
  const { tableId } = useParams();
  return (
    <PageContainer>
      <Tabs>
        <TabPane tab={'基本信息'} key={'base'}>
          hello
        </TabPane>
        <TabPane tab={'字段信息'} key={'column'}>
          <ColumnTable
            tableId={tableId}
            onCancel={() => {}}
            onSubmit={() => {}}
          />
        </TabPane>
        <TabPane tab={'生成信息'} key={'generator'}>
          hello world
        </TabPane>
      </Tabs>
    </PageContainer>
  );
};

export default TabList;
