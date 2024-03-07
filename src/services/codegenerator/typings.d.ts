declare namespace CodeGeneratorAPI {
  interface GenTableAddDTO {
    tableNames?: string[];
  }

  interface GenTableInfo extends Record<string, any> {
    // 主键
    tableId?: number;
    //
    tableName?: string;
    tableComment?: string;
    className?: string;
    packageName?: string;
    moduleName?: string;
    businessName?: string;
    functionName?: string;
    functionAuthor?: string;
    genType?: string;
    genPath?: string;
    options?: string;
  }

  interface GenTablePageInfo {
    pagination: CommonAPI.Pagination;
    rows: GenTableInfo[];
  }

  interface ResultGenTableInfo extends CommonAPI.Result {
    data: GenTableInfo[];
  }

  interface Result_GenTablePageInfo extends CommonAPI.Result {
    data: GenTablePageInfo;
  }
}
