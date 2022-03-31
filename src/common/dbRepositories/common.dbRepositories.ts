import { Repository } from 'typeorm';
import {
  QueryPaginationArgs,
  QueryPaginationOutput,
} from 'common/dto/base/common.base.dto';

export default class DbRepository<DbModel> extends Repository<DbModel> {
  getPaginationWithObjectsAndCount(
    queryArgs: QueryPaginationArgs,
    rowsCount: number,
    count: number,
  ): QueryPaginationOutput {
    return {
      total: count,
      remaining: Math.max(count - queryArgs.offset - queryArgs.limit, 0),
      rows: rowsCount,
    };
  }
}
