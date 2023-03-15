import LanguageEntity from '../entity/Language.entity'
import WilderEntity from '../entity/Wilder.entity'

export interface IMessageWithSuccess {
  success: boolean
  message: string
}
export interface ILanguageUpdateKey extends LanguageEntity {
  [key: string]: string
}
export interface IWilderUpdateKey extends WilderEntity {
  [key: string]: string
}
export interface IAssignNoteWilder {
  languageId: string
  wilderId: string
  note: number
}
export interface IFindByRelation {
  language: LanguageEntity;
  wilder: WilderEntity;
}

export interface IAssignNote {
  languageId: string;
  wilderId: string;
  note: number;
}