import { PersonTable } from 'src/schema/tables/person.table';
import { UserTable } from 'src/schema/tables/user.table';
import { ForeignKeyColumn, Index, Table } from 'src/sql-tools';

@Index({ columns: ['usersId', 'personsId'] })
@Table('user_person')
export class UserPersonTable {
  @ForeignKeyColumn(() => UserTable, { onUpdate: 'CASCADE', onDelete: 'CASCADE', primary: true, index: true })
  usersId!: string;

  @ForeignKeyColumn(() => PersonTable, { onUpdate: 'CASCADE', onDelete: 'CASCADE', primary: true, index: true })
  personsId!: string;
}
