import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UserHasAddressAddIsdefault1706071353025
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'userHasAddress',
      new TableColumn({
        name: 'isDefault',
        type: 'boolean',
        default: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('userHasAddress', 'isDefault');
  }
}
