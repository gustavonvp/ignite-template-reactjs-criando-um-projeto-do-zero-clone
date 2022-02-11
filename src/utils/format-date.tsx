/* eslint-disable prettier/prettier */
import { format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

export const formatDate = (date: string): string => {
    return format(new Date(date), 'dd/MM/yyyy', {
        locale: ptBR,
    });
}