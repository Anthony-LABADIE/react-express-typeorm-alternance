import { IAssignNoteWilder, IWilderUpdateKey } from './services.d';
import { DeleteResult, Repository } from 'typeorm'
import WilderEntity from '../entity/Wilder.entity'
import { IWilderCreate } from "../routes/routes.d";
import datasource from '../lib/datasource'
import LanguageService from './Language.service'
import NoteService from './Note.service'
import { IMessageWithSuccess } from './services';

export default class WilderService {
  //le constructeur qui charge db pour chaque instanciation
  db: Repository<WilderEntity>
  constructor() {
    this.db = datasource.getRepository('Wilder')
  }

  async createWilder({ first_name, last_name, email, about }: IWilderCreate): Promise<WilderEntity> {
    const wilder: WilderEntity = this.db.create({ first_name, last_name, email, about })

    return await this.db.save(wilder)
  }

  async list(): Promise<WilderEntity[]> {
    // return await this.db.find();

    return await this.db
      .createQueryBuilder('wilder')
      .leftJoinAndSelect('wilder.note', 'note')
      .leftJoinAndSelect('note.language', 'language')
      .getMany()
  }

  async findById(id: string): Promise<IWilderUpdateKey> {
    let wilder: WilderEntity | null = await this.db.findOneBy({ id })
    if (!wilder) {
      throw new Error("Ce wilder n'existe pas")
    }
    return wilder as IWilderUpdateKey;
  }

  async delete(id: string): Promise<IMessageWithSuccess> {
    let result = await this.db.delete({ id })
    if (result.affected === 0) {
      throw new Error("Problème, ce wilder n'existe peut être pas?")
    }
    return {
      success: true,
      message: 'Wilder supprimé',
    }
  }
  async update({ id, ...other }: IWilderUpdateKey) {
    let wilder: IWilderUpdateKey = await this.findById(id)
    Object.keys(other).forEach((value) => {
      if (other[value]) {
        wilder[value] = other[value]
      }
    })
    return await this.db.save(wilder)
  }

  async assignNote({ languageId, wilderId, note }: IAssignNoteWilder) {
    console.log('TEST', { languageId, wilderId, note })

    const language = await new LanguageService().findById(languageId)
    const wilder = await this.findById(wilderId)
    let previousNote = await new NoteService().findByRelation({
      language,
      wilder,
    })

    const noteResult = await new NoteService().saveNote({
      ...previousNote,
      language,
      wilder,
      note,
    })
    return noteResult
  }
}
