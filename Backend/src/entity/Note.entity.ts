import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import LanguageEntity from './Language.entity'
import WilderEntity from './Wilder.entity'

@Entity('note')
export default class Note {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  note: number

  @ManyToOne(() => LanguageEntity, { eager: true, onDelete: 'CASCADE' })
  language: LanguageEntity

  @ManyToOne(() => WilderEntity, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  wilder: WilderEntity
}

// import { EntitySchema } from "typeorm";
// export default new EntitySchema({
//   name: "Note",
//   columns: {
//     id: {
//       primary: true,
//       type: "int",
//       generated: true,
//     },
//     note: {
//       type: "int",
//     },
//   },
//   relations: {
//     language: {
//       target: "Language",
//       type: "many-to-one",
//       eager: true,
//       onDelete: "CASCADE",
//     },
//     wilder: {
//       target: "Wilder",
//       type: "many-to-one",
//       eager: true, //peupler/hydrater les données
//       joinColumn: true,
//       // inverseSide: "notes", //ce côté inverse se retrouve dans l'entité wilder (relations.notes)
//       onDelete: "CASCADE",
//     },
//   },
// });
