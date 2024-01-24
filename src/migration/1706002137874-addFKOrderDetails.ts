import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddFKOrderDetails1706002137874 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'orderDetails',
      new TableForeignKey({
        name: 'Fk7ProductId',
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orderDetails', 'Fk7ProductId');
  }
}
