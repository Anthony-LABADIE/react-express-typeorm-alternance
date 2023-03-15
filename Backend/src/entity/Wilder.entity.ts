import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import NoteEntity from "./Note.entity";

@Entity("wilders")
@Unique("contrainte_unique", ["email"])
export default class Wilder {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  about: string;

  @OneToMany(() => NoteEntity, (note) => note.wilder)
  notes?: NoteEntity[];
}
// import { EntitySchema } from 'typeorm'
// export default new EntitySchema({
//   name: 'Wilder',
//   tableName: 'wilders',
//   columns: {
//     id: {
//       primary: true,
//       type: 'int',
//       generated: true,
//     },
//     first_name: {
//       type: 'text',
//     },
//     last_name: { type: 'text' },
//     email: { type: 'text', unique: true },
//     about: {
//       type: 'text',
//     },
//   },
//   relations: {
//     note: {
//       type: 'one-to-many',
//       target: 'Note',
//       inverseSide: 'wilder',
//     },
//   },
// })
