import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSourceConfig {
  private readonly _dataSource: DataSource;

  constructor() {
    this._dataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'book_social_network',
    });
  }

  private async initialize() {
    await this._dataSource.initialize();
  }

  public dataSource(): DataSource {
    if (!this._dataSource.isInitialized) {
      this.initialize().then(() => {
        return this._dataSource;
      });
    }
    return this._dataSource;
  }
}
