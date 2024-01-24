import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class ProductEdit1706072571630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.renameColumn('products', 'userId', 'createdBy');

    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'tags',
        type: 'text',
        // isArray:true,
        isNullable: true,
      }),
    );

    // await queryRunner.createForeignKey(
    //     'products',
    //     new TableForeignKey({
    //       name: 'Fk2tagId',
    //       columnNames: ['tagId'],
    //       referencedColumnNames: ['id'],
    //       referencedTableName: 'tags',
    //       onDelete: 'CASCADE',
    //     }),
    //   );

    // await queryRunner.changeColumn(
    //   'products',
    //   'price',
    //   new TableColumn({
    //     name: 'price',
    //     type: 'float',
    //     isNullable: false,
    //   }),
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.renameColumn('products', 'createdBy', 'userId');
    // await queryRunner.dropForeignKey('products', 'Fk2tagId');
    await queryRunner.dropColumn('products', 'tags');

    // await queryRunner.changeColumn(
    //   'products',
    //   'price',
    //   new TableColumn({
    //     name: 'price',
    //     type: 'int',
    //     isNullable: false,
    //   }),
    // );
  }
}
