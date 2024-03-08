import {
  deleteGenTables,
  importTableSave,
} from '@/services/codegenerator/CodeGeneratorController';
import { message } from 'antd';

export const handleImport = async (tableNames?: (string | undefined)[]) => {
  const hide = message.loading('正在导入');
  try {
    await importTableSave(tableNames);
    hide();
    message.success('导入成功');
    return true;
  } catch (error) {
    hide();
    message.error('导入失败请重试！');
    return false;
  }
};

/*
 *  删除节点
 * @param selectedRows
 */
export const handleRemoveGenTables = async (
  selectedRows: CodeGeneratorAPI.GenTableInfo[],
) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    let tableIds = selectedRows.map((val) => {
      return val.tableId;
    });
    await deleteGenTables(tableIds);
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};
