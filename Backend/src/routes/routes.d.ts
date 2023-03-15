// Language interface
export interface ILanguageCreate{
    label: string;
}
export interface ILanguageUpdateData{
    label: string;
}
export interface IParams {
  [key: string]: string;
}

//Wilder interface
export interface IWilderCreate{
    first_name: string;
    last_name: string;
    email: string;
    about: string;
}
export interface IWilderUpdateData{
    first_name: string;
    last_name: string;
    email: string;
    about: string;
}
export interface IAssignNote{
    wilderId: string;
    languageId: string;
    note: number;
}
//Note interface

export interface INoteCreate{
    label: string;
}