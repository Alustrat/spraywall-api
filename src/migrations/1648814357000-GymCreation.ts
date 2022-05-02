import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class GymCreation1648814357000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const gymsTable = new Table({
      name: 'gyms',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'image',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'address',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'city',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'country',
          type: 'varchar',
          length: '255',
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          onUpdate: 'now()',
        },
      ],
    });
    await queryRunner.createTable(gymsTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('gyms');
  }
}
