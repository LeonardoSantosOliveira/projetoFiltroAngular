import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filtro-options.interface';
import { filterUsersList } from './utils/filter-users-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
      this.loading = false;
    }, 10)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;

    if (this.showUserDetails) {
      this.showUserDetails = !this.showUserDetails

      setTimeout(() => {
        this.showUserDetails = !this.showUserDetails
      }, 10)
    }
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions)

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList)
  }

}
