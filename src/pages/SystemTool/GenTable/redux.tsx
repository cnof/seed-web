import { queryGenTableColumnList } from '@/services/codegenerator/CodeGeneratorController';

/** 获取发布记录列表 */
export const handleGenTableColumnList = async (tableId?: number) => {
  return await queryGenTableColumnList(tableId);
};
