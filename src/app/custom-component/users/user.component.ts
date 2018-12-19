import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user: User;
    public users: User[] = [];
    constructor(private userService: UserService) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.showAllUsersIncludingRemoved();
    }

    getUser = (id: number) => {
        this.userService.getById(id, (success) => {
            this.user = <User>success;
        });
    }

    showAllUsers = () => {
        this.userService.getAll((success) => {
            this.users = <User[]>success;
        });
    }

    showAllUsersIncludingRemoved = () => {
        this.userService.getAllIncludingRemoved((success) => {
            this.users = <User[]>success;
        });
    }

    createUser = () =>  {
        this.userService.create(this.user, (success) => {
            this.user = <User>success;
        });
    }

    updateUser = (id: number) =>  {
        this.userService.update(id, this.user, (success) => {
            this.user = <User>success;
        });
    }

    removeUser = (id: number) => {
        if (!confirm('This user will be removed.')) {
            return;
        }
        this.userService.delete(id, (success) => {
            this.user = <User>success;
        });
    }

    deleteUser = (id: number) => {
        if (!confirm('This user will be completely deleted.')) {
            return;
        }
        this.userService.delete(id, (success) => {
            this.user = <User>success;
        });
    }

    saveUser = () => {
        if (this.user.userId > -1) {
            this.updateUser(this.user.userId);
        } else {
            this.createUser();
        }
    }

    createNew = () => {
        this.user = new User();
    }

}
