import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const removeAccents = (text: string): string => 
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const filteredUsersListByName = (name: string, usersList: IUser[]): IUser[] => {
  if (!name) {
    return usersList;
  }

  const normalizedSearch = removeAccents(name.toLowerCase());

  return usersList.filter((user) => 
    removeAccents(user.nome.toLowerCase()).includes(normalizedSearch)
  );
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