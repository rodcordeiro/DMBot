export const StringUtils = {
  CamelCaseToUnderscore: (str: string) =>
    str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(),

  UnderscoreToCamelCase: (str: string) =>
    str.replace(/(_\w)/g, (m) => m[1].toUpperCase()),

  Capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),

  ObjectToUpperCase: (obj: object) => {
    for (const key in obj)
      if (typeof obj[key] === 'string') obj[key] = obj[key].toUpperCase();
    return obj;
  },

  Boolean: (str: string | undefined) => {
    if (str === undefined) return false;
    if (str.trim() === '') return false;
    const regex = /^(true|false)$/i;
    return !!str.toLowerCase().match(regex);
  },

  RemoveBreakLines: (str: string) => str.replace(/(\r\n|\n|\r)/gm, ''),

  RemoveSpaces: (str: string) => str.replace(/\s+/g, ''),

  RemoveSpecialCharacters: (str: string) => str.replace(/[^a-zA-Z0-9]/g, ''),

  GetOnlyNumbers: (str: string) => str.replace(/\D/g, ''),

  GetOnlyLetters: (str: string) => str.replace(/[^a-zA-Z]/g, ''),

  GetLastCharacters: (str: string, length: number) => str.slice(-length),

  GetFirstCharacters: (str: string, length: number) => str.slice(0, length),

  IsNotEmpty: (str: string) => {
    if (str === undefined) return false;
    if (str === null) return false;
    if (str === 'undefined') return false;
    if (str === 'null') return false;
    if (str === '') return false;
    return str.trim() !== '';
  },

  IsBoolean: (str: string | undefined) => {
    if (str === undefined) return false;
    if (str.trim() === '') return false;
    const regex = /^(true|false)$/i;
    return !!str.toLowerCase().match(regex);
  },
};
