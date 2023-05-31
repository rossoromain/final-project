// APOLLO
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

//DDP Import
import "../api/ddp/DDPMethods";

//DB import
/* import CompanyDb from "../databases/company";
import CustomRoleDb from '../databases/customRoles';
import { CustomRolePermission } from '../databases/customRoles/utils';
import CustomRoleAssignmentDb from '../databases/cutomRolesAssignment';
import Users from '../databases/users'; */


Meteor.startup(() => {
    console.log('Startup of Meteor');

    const { NODE_ENV, CRON_ACTIV } = process.env;

    if (NODE_ENV == 'production') {
        console.log('Starting production environment ...');
    } else if (NODE_ENV == 'development') {
        console.log('Starting development environment ...');
    }

    if (CRON_ACTIV === "true") {
        console.log('-> Initializing CRON');
    } else if (CRON_ACTIV === "false") {
        console.log('-> CRON off');
    }

    try {
        //init user if no user created
        Roles.createRole("SuperAdmin", { unlessExists: true });
        Roles.createRole("Member", { unlessExists: true });

        if (!Meteor.users.findOne()) {

            console.log('-> Initializing SuperAdmin');

            const adminId = Accounts.createUser({
                username: "SuperAdmin",
                email: "superadmin@securityinsight.com",
                password: "SuperAdmin@#",
            });

            const adminObject = Meteor.users.findOne(adminId);

            adminObject.emails[0].verified = true;

            Meteor.users.update(adminId, adminObject);

            Roles.addUsersToRoles(adminId, 'SuperAdmin');

            /* console.log('is admin superAdmin ? (should be true) -> ', Roles.userIsInRole(adminId, 'SuperAdmin'));

            console.log('-> Running dev test scenario ...');

            const customerId = Accounts.createUser({
                username: "CustomerTest",
                email: "epitech.projet.final@gmail.com",
                password: "customer"
            });

            Roles.addUsersToRoles(customerId, 'Member');

            const companyId = CompanyDb.insert({
                name: "CompanyTest",
                owner: customerId
            });

            const testRoles: number[] = [];
            testRoles.push(Number(CustomRolePermission.CRUD_MACHINE));
            testRoles.push(Number(CustomRolePermission.USER_MANAGMENT));

            const testCustomRole = CustomRoleDb.insert({
                name: "Administrateur",
                scope: testRoles,
                companyId: companyId
            });

            CustomRoleAssignmentDb.insert({
                userId: customerId,
                customRoles: [testCustomRole]
            });

            console.log('-> End dev test scenario ...'); */
        } else {
            console.log('-> SuperAdmin already initalized, skipping')
        }

    } catch (error) {
        console.log('Error: ' + 'error initializing users and roles.\n' + error);
    }
})