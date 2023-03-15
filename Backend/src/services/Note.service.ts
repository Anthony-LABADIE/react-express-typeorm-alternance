import { IFindByRelation, IMessageWithSuccess } from './services.d'
import datasource from '../lib/datasource'
import { DeleteResult, Repository } from 'typeorm'
import NoteEntity from '../entity/Note.entity'

export default class NoteService {
  db: Repository<NoteEntity>
  constructor() {
    this.db = datasource.getRepository('Note')
  }

  async list(): Promise<NoteEntity[]> {
    return await this.db.find()
  }

  async findById(id: string): Promise<NoteEntity> {
    let note = await this.db.findOneBy({ id })
    if (!note) {
      throw new Error("Cette note n'existe pas")
    }
    return note
  }
  async findByRelation({
    language,
    wilder,
  }: IFindByRelation): Promise<NoteEntity | null> {
    return await this.db.findOneBy({ language, wilder })
  }

  async delete(id: string): Promise<IMessageWithSuccess> {
    let result: DeleteResult = await this.db.delete({ id })
    if (result.affected === 0) {
      throw new Error("Problème, cette note n'existe peut être pas?")
    }
    return {
      success: true,
      message: 'Note supprimée',
    }
  }
  async saveNote(data: any) {
    console.log('SAVE', data)
    return await this.db.save(data)
  }
}
