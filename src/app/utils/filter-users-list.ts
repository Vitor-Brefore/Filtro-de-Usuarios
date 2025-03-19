import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const filteredUsersListByName = (name: string, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === '' || undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );
  return filteredList;
};

const filteredUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo === status);
  return filteredList;
};

const filteredUsersListByDate = (
  startDate: string | Date,
  endDate: string | Date,
  usersList: IUser[]
): IUser[] => {
  const START_DATE_NOT_SELECTED = startDate === '' || undefined;
  const END_DATE_NOT_SELECTED = endDate === '' || undefined;

  if (START_DATE_NOT_SELECTED || END_DATE_NOT_SELECTED) {
    return usersList;
  }

  const checkDateInterval = (user: IUser) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });

  const listFiltered = usersList.filter(checkDateInterval);

  return listFiltered;
};

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filteredUsersListByName(filterOptions.name, usersList);
  filteredList = filteredUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filteredUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

export { filterUsersList };