import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ProductEdit21706160162360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'media',
        type: 'text',
        // isArray:true,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'media');
  }
}
