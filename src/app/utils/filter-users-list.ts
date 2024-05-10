import { isWithinInterval } from 'date-fns';
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from '../interfaces/filtro-options.interface';

const filterUserListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPED = name === undefined

  if (NAME_NOT_TYPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

  return filteredList;
}


const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {

  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList
  }

  const filteredList = usersList.filter((user) => user.ativo === status);

  return filteredList;
}

const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {

  const DATA_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATA_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
    start: startDate,
    end: endDate,
  }))

  return filteredList;

}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUserListByName(filterOptions.name, usersList);
  filteredList = filterUserListByStatus(filterOptions.status, filteredList)
  filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList)


  return filteredList
}

export { filterUsersList }
