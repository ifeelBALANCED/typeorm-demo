import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1651326110081 implements MigrationInterface {
    name = 'UserMigration1651326110081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "surname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "surname" character varying NOT NULL`);
    }

}
